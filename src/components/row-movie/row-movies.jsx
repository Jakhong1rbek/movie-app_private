import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { movies } from '../../constants'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import './row-movies.scss'

class RowMovies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
		}
	}

	onToggleOpen = () => {
		this.setState(({ open }) => ({ open: !open }))
	}

	render() {
		const { open } = this.state
		return (
			<div className='app__rowmovie'>
				<div className='app__rowmovie-top'>
					<div className='app__rowmovie-top__title'>
						<img src='/tranding.svg' alt='' />
						<h1>Trending</h1>
					</div>
					<div className='hr' />
					<a href='#'>See more</a>
				</div>

				<div className='app__rowmovie-lists'>
					{movies.map((movie, index) => (
						<RowMoviesItem
							key={index}
							movie={{ ...movie, index }}
							onToggleOpen={this.onToggleOpen}
						/>
					))}
				</div>

				<Modal open={open} onClose={this.onToggleOpen}>
					<MovieInfo />
				</Modal>
			</div>
		)
	}
}

export default RowMovies
