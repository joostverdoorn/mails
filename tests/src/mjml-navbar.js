import React from 'react';

export default class MjmlNavbar extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section background-color="#ef6451">
						<mj-column>
							<mj-navbar base-url="https://mjml.io" hamburger="hamburger" ico-color="#ffffff">
								<mj-navbar-link href="/gettings-started-onboard" color="#ffffff">
									{'Getting started'}
								</mj-navbar-link>
								<mj-navbar-link href="/try-it-live" color="#ffffff">
									{'Try it live'}
								</mj-navbar-link>
								<mj-navbar-link href="/templates" color="#ffffff">
									{'Templates'}
								</mj-navbar-link>
								<mj-navbar-link href="/components" color="#ffffff">
									{'Components'}
								</mj-navbar-link>
							</mj-navbar>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
