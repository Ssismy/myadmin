import React from 'react';
import "./topbar.css";
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">myadmin</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
           <NotificationsNone />
           <span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
           <Language />
           <span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
           <Settings />
          </div>
          <img className="profileImage" src="https://i.ibb.co/VJKsQhP/taylor-8-Vt2haq8-NSQ-unsplash.jpg" alt="profileImage" />
 
        </div>
      </div>
    </div>
  )
}

export default Topbar