import React from 'react';

export default class MjmlHeadAttributes extends React.Component {
	render() {
		return (
			<mjml>
				<mj-head>
					<mj-attributes>
						<mj-text padding="0" />
						<mj-class name="blue" color="blue" />
						<mj-class name="big" font-size="20px" />
						<mj-all font-family="Arial" />
					</mj-attributes>
				</mj-head>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-text mj-class="blue big">
								{'Hello World!'}
							</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>

		);
	}
}
