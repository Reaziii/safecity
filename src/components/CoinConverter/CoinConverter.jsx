import React from 'react';
import './CoinConverter.scss';
import Ellipse from '../../Assets/Icon/extra/Ellipse.svg';
import gift from '../../Assets/Icon/extra/gift.svg';
import share from '../../Assets/Icon/extra/share.svg';
import settings from '../../Assets/Icon/extra/settings.svg';
import safecoin from '../../Assets/Icon/Coin/BCH.png';
import bottomArrow from '../../Assets/Icon/extra/BottomArrow.svg';
import downarrow from '../../Assets/Icon/extra/downarrowwithborder.svg';
import exchange from '../../Assets/Icon/extra/exchange.svg'
const CoinConverter = () => {
	return (
		<div className="coinconverter">
			<div className="top-buttons">
				<button className="a-button">
					<img src={Ellipse} alt="Elipse" />
				</button>
				<button className="a-button">
					<img src={gift} alt="Elipse" />
				</button>
				<button className="a-button">
					<img src={share} alt="Elipse" />
				</button>
				<button className="a-button">
					<img src={settings} alt="Elipse" />
				</button>
			</div>

			<div className="pay-available">
				<p>pay</p>
				<p style={{ textDecoration: 'underline' }}>Available: 500</p>
			</div>

			<button className="dropdown">
				<div className="start-sec">
					<img src={safecoin} alt="safecoin" className="coin" />
					<p>SAFECOIN</p>
					<img src={bottomArrow} alt="bottom-arrow" className="arrow" />
				</div>
				<div className="end-sec">0</div>
			</button>

			<div className="down-arr-border">
				<img src={downarrow} alt="downarrow" />
			</div>

			<div style={{ marginTop: '0px' }} className="pay-available">
				<p>Recieve (Estimated)</p>
				<p style={{ textDecoration: 'underline' }}>Available: 1200</p>
			</div>

			<button className="dropdown">
				<div className="start-sec">
					<img src={safecoin} alt="safecoin" className="coin" />
					<p>SAFECOIN</p>
					<img src={bottomArrow} alt="bottom-arrow" className="arrow" />
				</div>
				<div className="end-sec">0</div>
			</button>

            <div className="sfc-usdc">
                1 SFC = 1.0005 USDC <img src={exchange} alt="exchage"/>
            </div>

            <button className="order-confirm">
                Confirm Order
            </button>

            <div className="the-end">
                Enter an amount to see more trading details
            </div>
		</div>
	);
};

export default CoinConverter;
