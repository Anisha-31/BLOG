import React , {useEffect,useState} from 'react'
import { Sidebar } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom';
import {HiUser,HiArrowSmRight} from 'react-icons/hi'
export default function DashboardSide() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromURL = urlParams.get('tab')
    console.log(tabFromURL);
  }, [location.search])
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
          <Sidebar.Item active={tab==='profile'} icon={HiUser} label={"User"} labelColor='dark'>Profile</Sidebar.Item></Link>
          <Sidebar.Item icon={HiArrowSmRight} className=" cursor-pointer ">Sign OUT </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
      
    </Sidebar>
  )
}

