import React from 'react';

export default class PlainMjml extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body background-color="#F4F4F4">
					<mj-section
						background-color="#000000"
						background-repeat="no-repeat"
						text-align="center"
						vertical-align="top"
					>
						<mj-column>
							<mj-image
								align="center"
								border="none"
								padding-bottom="30px"
								padding="10px 25px"
								src="http://5vph.mj.am/img/5vph/b/1g86w/0g67t.png"
								target="_blank"
								title=""
								width="180px"
							/>
							<mj-text
								align="left"
								color="#55575d"
								font-family="Arial, sans-serif"
								font-size="13px"
								line-height="22px"
								padding-bottom="0px"
								padding-top="0px"
								padding="10px 25px"
							>
								{'WOMEN   |   MEN   |   KIDS'}
							</mj-text>
						</mj-column>
					</mj-section>
					<mj-section
						background-color="#000000"
						background-repeat="no-repeat"
						text-align="center"
						vertical-align="top"
						padding="0 0 0 0"
					>
						<mj-column>
							<mj-image
								align="center"
								border="none"
								padding-bottom="0px"
								padding-left="0px"
								padding-right="0px"
								padding="0px 25px"
								src="http://5vph.mj.am/img/5vph/b/1g86w/0696u.jpeg"
								target="_blank"
								title=""
								width="780px"
							/>
						</mj-column>
					</mj-section>
					<mj-section
						background-color="#000000"
						background-repeat="no-repeat"
						text-align="center"
						vertical-align="top"
						padding="0 0 0 0"
					>
						<mj-column>
							<mj-text
								align="left"
								color="#55575d"
								font-family="Arial, sans-serif"
								font-size="13px"
								line-height="22px"
								padding-bottom="5px"
								padding-top="25px"
								padding="10px 25px"
							>
								<b>Black Friday</b>
							</mj-text>
							<mj-text
								align="left"
								color="#55575d"
								font-family="Arial, sans-serif"
								font-size="13px"
								line-height="22px"
								padding-bottom="20px"
								padding-top="0px"
								padding="10px 25px"
							>
								<b>Take an&nbsp; extra 50% off</b>
								<br />
								{'Use code SALEONSALE* at checkout'}
							</mj-text>
						</mj-column>
					</mj-section>
					<mj-section
						background-color="#000000"
						background-repeat="no-repeat"
						text-align="center"
						vertical-align="top"
						padding-bottom="40px"
						padding="0 0 0 0"
					>
						<mj-column>
							<mj-button
								background-color="#ffffff"
								border-radius="3px"
								font-family="Times New Roman, Helvetica, Arial, sans-serif"
								font-size="18px"
								font-weight="normal"
								inner-padding="10px 25px"
								padding-bottom="30px"
								padding="10px 25px"
							>
								{'Shop Now'}
							</mj-button>
							<mj-text
								align="left"
								color="#55575d"
								font-family="Arial, sans-serif"
								font-size="13px"
								line-height="22px"
								padding-bottom="0px"
								padding-top="5px"
								padding="10px 25px"
							>
								{'* Offer valid on Allura purchases on 17/29/11 at 11:59 pm. No price adjustments on previous '}
								{'purchases, offer limited to stock. Cannot be combined with any offer or promotion other than free.'}
							</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
