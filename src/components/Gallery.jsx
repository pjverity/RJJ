import {h, render, Component} from 'preact'

export default class Gallery extends Component {
	render(props, state) {
		return (
			<div className={'mt-4'}>
				<GalleryRow image1={'images/RJJ1.jpg'} image2={'images/RJJ2.jpg'} image3={'images/RJJ3.jpg'} image4={'images/RJJ4.jpg'}/>
				<GalleryRow image1={'images/RJJ5.jpg'} image2={'images/RJJ6.jpg'} image3={'images/RJJ7.jpg'} image4={'images/RJJ8.jpg'}/>
			</div>
		)
	}
}

class GalleryRow extends Component {
	render(props, state) {
		return (
			<div className={'row'}>
				<div className={'col mt-4'}>
					<img src={props.image1} className="rounded mx-auto d-block" />
				</div>
				<div className={'col mt-4'}>
					<img src={props.image2} className="rounded mx-auto d-block" />
				</div>
				<div className={'col mt-4'}>
					<img src={props.image3} className="rounded mx-auto d-block" />
				</div>
				<div className={'col mt-4'}>
					<img src={props.image4} className="rounded mx-auto d-block" />
				</div>
			</div>
		)
	}
}