import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    }, 
    password:{
        type:String,
        required:true,
      
    },
    profilePicture:{
        type:String,
        default:"https://www.google.com/imgres?q=profile%20picture%20pizzabay&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2018%2F11%2F13%2F21%2F43%2Favatar-3814049_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fblank%2520profile%2520picture%2F&docid=pvGdIoIu4SZZ2M&tbnid=y9wDwsO0_m30xM&vet=12ahUKEwjmg7u2s-6FAxVIa2wGHVcECOwQM3oECHwQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwjmg7u2s-6FAxVIa2wGHVcECOwQM3oECHwQAA"

    },
    isAdmin: {
        type: Boolean,
        default: false,
      },
},{timestamps:true});


const User=mongoose.model('User',userSchema);
export default User ;