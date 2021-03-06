import React from 'react';

export default class MjmlCarousel extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-carousel>
								<mj-carousel-image
									src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg"
								/>
								<mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" />
								<mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
							</mj-carousel>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
