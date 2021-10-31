import React from 'react';
import './Header.scss';

import coin from '../../Assets/coinLogo1.png';
import profileIcon from '../../Assets/Icon/extra/profileIcon.svg';
import bottomArrow from '../../Assets/Icon/extra/BottomArrow.svg';
const Header = ({head}) => {
	return (
		<>
			<div className="Header">
				<div className="second-part">
					<div className="left__sec">{head}</div>
					<div className="right__sec">
						<div className="right__end">
							<div className="connect__wallet">
								<div className="bsc__xx">
									<p></p>
									<span>BSC</span>
								</div>
								<button className="connect_wallet_button">connect to a wallet</button>
							</div>

							<img src={profileIcon} alt="profile-icon" className="profile-icon" />
							<p className="profileName">Sam Smith</p>
							<img src={bottomArrow} alt="bottom-arrow" className="bottom-arrow" />
						</div>
					</div>
				</div>
			</div>

			<div style={{ height: '70px' }} />
		</>
	);
};

export default Header;
