import React from 'react'
import AddedPortfolios from '../AddedPortfolios/AddedPortfolios'
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader'
import PortfolioTab from '../PortfolioTab/PortfolioTab'

const PortfolioLeft = ({setpage}) => {
    return (
        <>
        <PortfolioHeader setpage={setpage}/>
        <PortfolioTab/>
        <AddedPortfolios/>
        </>
    )
}

export default PortfolioLeft
