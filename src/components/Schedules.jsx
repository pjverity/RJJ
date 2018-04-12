import { h, render, Component } from 'preact';

import Schedule from './Schedule.jsx';

import {SITE_API_URL} from '../site-constants';

let SCHEDULES_API_URL = SITE_API_URL + '/schedules/search/activeSchedules';

export default class Schedules extends Component {

	componentDidMount() {
		$.get(SCHEDULES_API_URL, (data) => this.setState({getSchedulesFailed: false, schedules: data._embedded.schedules}))
			.fail((jqxhr, textStatus, error) => this.setState({getSchedulesFailed: true}));
	}

	render(props, state) {
		return (
			<div>

				<div className="row m-4 justify-content-center">
					<div className="col">
						<hr className="d-none d-sm-block"/>
					</div>
					<div className="h4">Upcoming Courses</div>
					<div className="col">
						<hr className="d-none d-sm-block"/>
					</div>
				</div>

				<div className="row mb-4 justify-content-center">
					<div className="col">
						<table className="table table-sm table-striped">
							<thead>
							<tr>
								<th scope="col">When</th>
								<th scope="col">Duration</th>
								<th scope="col">Group</th>
								<th scope="col">Where</th>
							</tr>
							</thead>
							<tbody>
							{this.state.getSchedulesFailed &&
								<tr>
									<td className='text-center' colSpan={4}><i className="fa fa-exclamation-triangle text-danger"/> Failed to get schedules. Please check back later...</td>
								</tr>
							}
							{!this.state.getSchedulesFailed && this.state.schedules === undefined &&
								<tr>
									<td className='text-center' colSpan={4}>Getting latest schedules... <i className='fa fa-fw fa-circle-o-notch fa-spin'></i></td>
								</tr>
							}
							{this.state.schedules !== undefined && this.state.schedules.length === 0 &&
								<tr>
									<td className='text-center' colSpan={4}>No schedules. Please check back later...</td>
								</tr>
							}
							{this.state.schedules !== undefined && this.state.schedules.length > 0 &&
								this.state.schedules.map(schedule => <Schedule schedule={schedule}/>)
							}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}



