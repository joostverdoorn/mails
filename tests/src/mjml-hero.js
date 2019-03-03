import React from 'react';

export default class MjmlHero extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-hero
						mode="fixed-height"
						height="469px"
						background-width="600px"
						background-height="469px"
						background-url="https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg"
						background-color="#2a3448"
						padding="100px 0px"
					>
						<mj-text
							padding="20px"
							color="#ffffff"
							font-family="Helvetica"
							align="center"
							font-size="45px"
							line-height="45px"
							font-weight="900"
						>
							{'GO TO SPACE'}
						</mj-text>
						<mj-button href="https://mjml.io/" align="center">
							{'ORDER YOUR TICKET NOW'}
						</mj-button>
					</mj-hero>
				</mj-body>
			</mjml>
		);
	}
}
