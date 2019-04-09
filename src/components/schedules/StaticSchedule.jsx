import { h, render, Component } from 'preact'

export default class StaticSchedule extends Component {

	render(props, state) {

		return (
			<div className='row m-4 align-items-end text-center'>
				<div className="col d-block d-sm-none">
					<p className='display-4'>Thursdays 5-6pm</p>
					<p className="text-muted">Starting Thursday 25th April</p>
				</div>
				<div className="col d-none d-sm-block border-right">
					<p className='display-4'>Thursdays 5-6pm</p>
					<p className="text-muted">Starting Thursday 25th April</p>
				</div>
				<div className="col ">
					<p className='display-4'>£5</p>
					<p className="text-muted">Per session bookable in half term blocks</p>
				</div>
			</div>
		)
	}
}