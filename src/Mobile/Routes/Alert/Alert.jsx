import React from 'react'
import AddedAlerts from '../../Components/AddedAlerts/AddedAlerts'
import AlertHeader from '../../Components/AlertHeader/AlertHeader'

const Alert = () => {
    return (
        <div className="price-alert mobile-container">
            <AlertHeader/>
            <AddedAlerts/>
        </div>
    )
}

export default Alert
