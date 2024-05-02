import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashboardSide from '../components/DashboardSide'
import DashProfile from '../components/DashProfile';
function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromURL = urlParams.get('tab')
    console.log(tabFromURL);
  }, [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className=''>
        {/* Sidebar */}
        <DashboardSide />
      </div>
      
        {/* Profile */}

        {tab ==='profile' && <DashProfile />}
    

    </div>
  )
}

export default Dashboard
