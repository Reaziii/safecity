import React from 'react';
import './Portfolio.scss';
import btc from '../../Assets/Icon/Coin/btc.svg';
import bottomArrow from '../../Assets/Icon/extra/BottomArrow.svg';
import greenup from '../../Assets/Icon/extra/greenup.svg';
import reddown from '../../Assets/Icon/extra/reddown.svg';
import eth from '../../Assets/Icon/Coin/eth.svg'
import safecoin from '../../Assets/Icon/Coin/bch.svg'
import theter from '../../Assets/Icon/Coin/Theter.svg'
import qtum from '../../Assets/Icon/Coin/qtum.svg'
import leftarrow from '../../Assets/Icon/extra/leftArrow.svg'
import rightArrow from '../../Assets/Icon/extra/rightArrowWhite.svg'
const PortfolioComponent = ({ route }) => {
	const values = [
		{
			coinicon: btc,
			name: {
				main: 'Bitcoin',
				short: 'BTC',
			},
			balance: {
				up: '$150.54B',
				down: '$23.82B',
			},
			price24h: {
				value: '$6766.66',
				up: true,
				percent: 4.56,
			},
			portfolioPercent: {
				value: 45,
			},
		},
		{
			coinicon: eth,
			name: {
				main: 'Ethereum',
				short: 'ETH',
			},
			balance: {
				up: '$67.54B',
				down: '$23.82B',
			},
			price24h: {
				value: '$166.66',
				up: false,
				percent: 7.99,
			},
			portfolioPercent: {
				value: 20,
			},
		},
        {
			coinicon: safecoin,
			name: {
				main: 'Safecoin',
				short: 'SAFECOIN',
			},
			balance: {
				up: '$67.54B',
				down: '$23.82B',
			},
			price24h: {
				value: '$166.66',
				up: false,
				percent: 7.99,
			},
			portfolioPercent: {
				value: 20,
			},
		},
        {
			coinicon: theter,
			name: {
				main: 'Tether',
				short: 'USBT',
			},
			balance: {
				up: '$67.54B',
				down: '$23.82B',
			},
			price24h: {
				value: '$166.66',
				up: true,
				percent: 7.99,
			},
			portfolioPercent: {
				value: 10,
			},
		},
        
        {
			coinicon: qtum,
			name: {
				main: 'Qtum',
				short: 'QTUM',
			},
			balance: {
				up: '$67.54B',
				down: '$23.82B',
			},
			price24h: {
				value: '$166.66',
				up: true,
				percent: 7.99,
			},
			portfolioPercent: {
				value: 10,
			},
		},
	];

	return (
		<div className="container20">
			<div className="portfolio-tab">
				{route ? <div className="head">Portfolio</div> : null}

				<div className="portfolio-details">
					<div className="single-det">
						<button className="radio-button" />

						<div className="details">
							<div style={{ width: '14%' }} className="asstes ab-xx">
								<p>Assets</p>
								<img src={bottomArrow} alt="bottom-arrow" />
							</div>
							<div style={{ justifyContent: 'flex-end' }} className="balance ab-xx">
								<p>Ballance</p>
								<img src={bottomArrow} alt="bottom-arrow" />
							</div>
							<div style={{ justifyContent: 'flex-end' }} className="price24h ab-xx">
								<p>Price 24H</p>
								<img src={bottomArrow} alt="bottom-arrow" />
							</div>
							<div style={{ width: '28%', paddingLeft: '0px' }} className="portfolio-percent ab-xx">
								<div style={{ display: 'flex', alignItems: 'center',marginLeft : '30px' }}>
									<p>Portfolio %</p>
									<img src={bottomArrow} alt="bottom-arrow" />
								</div>
							</div>
							<div style={{ width: '22%' }} className="actions ab-xx">
								<p>Actions</p>
								<img src={bottomArrow} alt="bottom-arrow" />
							</div>
						</div>
					</div>
					{values.map((item, key) => (
						<div style={{ height: '60px' }} key={key} className="single-det">
							<button className="radio-button" />
							<div className="real-detls">
								<div style={{ width: '12%' }} className="section">
									<img src={item.coinicon} alt="btc" />
									<div className="section-aa">
										<p>{item.name.main}</p>
										<p className="litgray">{item.name.short}</p>
									</div>
								</div>

								<div style={{ justifyContent: 'flex-end' }} className="section right">
									<div 
                                        style={{
                                            display : 'flex',
                                            flexDirection : 'column',
                                            alignItems : 'flex-end',
                                            paddingRight : '5px'
                                        }}
                                    className="section-bb">
										<p>{item.balance.up}</p>
										<p className="litgray">{item.balance.down}</p>
									</div>
								</div>
								<div style={{ justifyContent: 'flex-end' }} className="section right">
									<div className="section-cc">
										<p>{item.price24h.value}</p>
										<p style={{justifyContent : 'flex-end',color : item.price24h.up?'rgba(0, 196, 140, 1)':'rgba(239, 104, 102, 1)'}} className="litgray">
											<img style={{marginRight : 0}} src={item.price24h.up ? greenup : reddown} />{' '}
											{`${item.price24h.percent}%`}
										</p>
									</div>
								</div>
								<div style={{ width: '28%' }} className="section">
									<div className="portfolio-bar">
										<p>{item.portfolioPercent.value}%</p>

										<div className="upbox">
											<div style={{width : `${item.portfolioPercent.value}%`}} className="downbox"></div>
										</div>
									</div>
								</div>
								<div style={{ width: '22%' }} className="section">
									<div className="section-ee">
										<a href="">withdraw</a>
										<a href="">diposit</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

                <div className="pagination">
                    <img src={leftarrow} alt="leftarrow"/>
                    <p>1</p>
                    <img src={rightArrow} alt="rightarrow"/>

                </div>

			</div>
		</div>
	);
};

export default PortfolioComponent;
