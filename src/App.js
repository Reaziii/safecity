import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Routes from './Routes'
import MobileVersion from './Mobile/MobileVersion'
const App = () => {
  if (window.innerWidth <= 700) {
    return <MobileVersion />
  }
  return (
    <div className="App">
      <div className="Container">
        <div className="first-col">
          <Sidebar />
        </div>
        <div className="second-col">
          <Routes />
        </div>
      </div>
    </div>
  )
}

export default App
