import React from 'react';
import './MarketChart.scss';
import safecoin from '../../Assets/Icon/Coin/BCH.png';
import rightArrow from '../../Assets/Icon/extra/rightArrow.svg';
import dollar from '../../Assets/Icon/Coin/Dollar.svg';
import bottomarrow from '../../Assets/Icon/extra/BottomArrowGray.svg';
import bar3 from '../../Assets/Icon/extra/3bar.svg';
import dna from '../../Assets/Icon/extra/dna.svg';
import chart from '../../Assets/Icon/sidebarIcons/chart.svg';
import firstItem from '../../Assets/Img/chartItem/firstItem.svg';
import secondItem from '../../Assets/Img/chartItem/secondItem.svg';
import thirdItem from '../../Assets/Img/chartItem/thirdItem.svg';
const MarketChart = () => {
	return (
		<div className="Market-chart">
			<div className="chart-header">
				<div className="safecoin">
					<img src={safecoin} alt="safecoin" className="safecoin-logo" />
					<div className="a-text">
						<p className="safecoin-a">
							SAFECOIN<span>{` (SAFECOIN)`}</span>
						</p>
						<p className="safecoin-b">CHANGE</p>
					</div>

					<img src={rightArrow} alt="rightArrow" className="right-arrow" />

					<div className="ax-img">
						<img src={dollar} alt="safecoin" className="doller-logo" />
					</div>
					<div className="a-text">
						<p className="safecoin-a">
							Dollar<span>{` (Dollar)`}</span>
						</p>
						<p className="safecoin-b">CHANGE</p>
					</div>
				</div>
			</div>
			<div className="chart-option">
				<div className="option option-a">
					<p className="op-a">1D</p>
					<img src={bottomarrow} alt="bottom-arrow" />
				</div>
				<div className="option option-a">
					<img src={bar3} alt="3 bar" className="setting-bar" />
					<img src={bottomarrow} alt="bottom-arrow" />
				</div>
				<div className="option option-a">
					<img src={dna} alt="3 bar" className="setting-bar" />
					<img src={bottomarrow} alt="bottom-arrow" />
				</div>
				<div className="option option-a">
					<p style={{ marginLeft: '4px' }}>|</p>
					<img src={bottomarrow} alt="bottom-arrow" />
				</div>
				<div className="option option-e">
					<p>standard</p>
					<img src={bottomarrow} alt="bottom-arrow" />
				</div>
			</div>

			<div className="chart">
				<img src={chart} alt="chart" />
			</div>

			<div className="footer">
				<div className="option">
					<div className="underoption">
						<p className="lastprice">LAST PRICE</p>
						<p className="last-price-value">0.056</p>
					</div>
				</div>
				<div className="option">
					<div className="underoption">
						<p className="lastprice">24H CHANGE</p>
						<p style={{ color: '#0885FF' }} className="last-price-value change-24">
							+2.5478%
						</p>
					</div>
					<img src={firstItem} alt="firstItem" className="chart-a" />
				</div>
				<div className="option">
					<div className="underoption">
						<p className="lastprice">24H HIGH</p>
						<p style={{ color: '#0885FF' }} className="last-price-value change-24">
							0.087
						</p>
					</div>
					<div style={{ width: '50%' }} className="option-chart">
						<img src={secondItem} alt="firstItem" className="chart-a" />
					</div>
				</div>
				<div className="option">
					<div className="underoption">
						<p className="lastprice">24H LOW</p>
						<p style={{ color: '#0885FF' }} className="last-price-value change-24">
							0.043
						</p>
					</div>
					<div style={{ width: '50%' }} className="option-chart">
						<img src={thirdItem} alt="firstItem" className="chart-a" />
					</div>
				</div>
				<div className="option">
					<div className="underoption">
						<p className="lastprice">24H VOLUME</p>
						<p style={{ color: 'white' }} className="last-price-value change-24">
							0.265M
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketChart;
