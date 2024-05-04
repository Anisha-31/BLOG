import { Alert, Button, TextInput } from 'flowbite-react';
import React, { useEffect, useState , useRef } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {app} from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {getDownloadURL, getStorage,ref,uploadBytesResumable} from 'firebase/storage'
import { updateFailure,updateStart,updateSuccess} from '../redux/user/slice';

export default function DashProfile() {
  const {currentUser} =useSelector((state)=>state.user)
  const [imageFile , setImageFile] =useState(null);
  const [imageFileURL, setImageFileURL]=useState(null);
  const [imageFileUploadingProgress , setImageFileUploadingprogress] = useState(null)
  const [imageFileError , setImageFileError]=useState(null)
  const [imageFileUploading ,setImageFileUploading] =useState(false);
  const [formData,setFormData]=useState();
  const [updateUserSuccess,setUpdateUserSuccess] = useState(null)
  const [updateUserError , setUpdateUserError] = useState(null)
  // console.log(imageFileError,imageFileUploadingProgress)
  const filePickerRef =useRef();
  const dispatch = useDispatch();
  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    if(file){
      setImageFile(file);
      setImageFileURL(URL.createObjectURL(file));
    }
    
  };
  useEffect(()=>{
    if(imageFile){
      uploadImage();
    }
  },[imageFile]);

  const uploadImage= async ()=>{
    setImageFileUploading(true);
    setImageFileError(null);
   
    const storage = getStorage(app);
    const fileName = new Date().getTime()+ imageFile.name;
    const storageRef=ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot)=>{
        const progress =(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        setImageFileUploadingprogress(progress.toFixed(0));
      },
     (error)=>{
      setImageFileError('could not upload image (file must be less than 2 MB)');
      setImageFileUploadingprogress(null)
      setImageFile(null);
      setImageFileURL(null);
      setImageFileUploading(false);

     },
     ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        setImageFileURL(downloadURL);
        setFormData({...formData,profilePicture:downloadURL})
        setImageFileUploading(false);
      
      })
     }
    )
  }
const handleChange =(e)=>{
  setFormData({...formData,[e.target.id]:e.target.value});
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if(Object.keys(formData).length===0){
    setUpdateUserError('No changes made')
    return ;
  }
  if(imageFileUploading) {
    setUpdateUserError('Please wait for image to upload')
    return ;
  }
  try{
    dispatch(updateStart());
    const res =await fetch(`/api/user/update/${currentUser._id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body :JSON.stringify(formData),
    });
    const data = await res.json();
    if(!res.ok){
      dispatch(updateFailure(error.message))
      setUpdateUserError(data.message);
    }
    else{
      dispatch(updateSuccess(data));
      setUpdateUserSuccess("user's profile updated successfully");
    }


  }catch(error){
    dispatch(updateFailure(error.message))



  }
}
  
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>
      DashProfile
    </h1>
    <form className='flex flex-col gap-4'>
      <input type='file' accept='image/+' onChange={handleImageChange} ref={filePickerRef} hidden/>
      <div className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={()=>filePickerRef.current.click()}>
      
      {imageFileUploadingProgress && (<CircularProgressbar value={imageFileUploadingProgress || 0} text={`${imageFileUploadingProgress}%`} 
      strokeWidth={5}
      styles={{
        root:{
          width:'100%',
          height:'100%',
          position:'absolute',
          top:0,
          left:0,

        },
        path:{
          stroke:`rgb(62,152,199 , $(imageFileUploadingProgress/100))`,
        }
      }}/>)}
      <img src={imageFileURL || currentUser.profilePicture} alt='Image is here' 
      className={`rounded-full w-full h-full object-cover border-8 border-[lightgray]$
      {imageFileUploadingProgress && imageFileUploadingProgress<100} && 'opacity-60`}/>

      </div>
      {imageFileError && 
<Alert color='failure'>
        {imageFileError}
</Alert>
      }
      
<TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} onChange={handleChange}/>
<TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} onChange={handleChange}/>

<TextInput type='password' id='password' onChange={handleChange}/>
<Button type='submit' className='' gradientDuoTone='purpleToBlue' outline>
  Update 
</Button>
    </form>
    <div className='text-red-500 flex justify-between m-5'>
      <span className='cursor-pointer'> 
        Delete Account
      </span>
      <span className='cursor-pointer'> 
        Sign  Out
      </span>
    </div>
    {updateUserSuccess && (
      <Alert color='success' className='mt-5'>
        {updateUserSuccess}
      </Alert>
    )}
    {updateUserError && (
      <Alert color='failure' className='mt-5'>
        {updateUserError}
      </Alert>
    )}
    
    </div>
    
  )
}
