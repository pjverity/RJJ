import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="mt-3" style={{fontSize: '.75em'}}>
				<div className="container-fluid bg-light text-secondary">
					<div className="row pt-3 text-center justify-content-center">
						<div className="col-auto">
							Mens
							<ul className="list-unstyled">
								<li><a href="http://www.reigatemensjoggers.co.uk">Reigate</a></li>
							</ul>
						</div>
						<div className="col-auto">
							Ladies
							<ul className="list-unstyled">
								<li><a href="http://www.reigateladiesjoggers.co.uk">Reigate</a></li>
								<li><a href="http://www.caterhamladiesjoggers.co.uk">Caterham</a></li>
								<li><a href="http://www.dorkingladiesjoggers.co.uk">Dorking</a></li>
								<li><a href="http://www.horshamladiesjoggers.co.uk">Horsham</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

