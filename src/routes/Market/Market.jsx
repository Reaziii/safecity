import React, { useEffect } from 'react';
import './Market.scss';
import CoinConverter from '../../components/CoinConverter/CoinConverter';
import MarketChart from '../../components/MarketChart/MarketChart';
import Header from '../../components/Header/Header';
import PortfolioComponent from '../../components/Portfolio/Portfolio';
import { motion } from 'framer-motion';
const Market = () => {

	return (
		<div  className="main-container page">
			<Header head="Market" />
			<div className="Market-route">
				<div className="markter-top-bar">
					<MarketChart />
					<CoinConverter />
				</div>
				<PortfolioComponent route={true} />
			</div>
		</div>
	);
};
export default Market;
