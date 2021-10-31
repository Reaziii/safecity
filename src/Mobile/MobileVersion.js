import React from 'react'
import BottomNav from './Components/BottomNav/BottomNav'
import Routes from './Routes'
import './MovileVersion.scss'
const MobileVersion = () => {
    return (
        <div style={{color : 'white'}} className="Mobile-version">
            <BottomNav/>
            <Routes/>
        </div>
    )
}

export default MobileVersion
