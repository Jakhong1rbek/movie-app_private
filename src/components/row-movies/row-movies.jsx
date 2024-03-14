import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import MovieService from '../../services/movie-service'
import Error from '../error/error'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import Spinner from '../spinner/spinner'
import './row-movies.scss'

const RowMovies = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [open, setOpen] = useState(false)
	const [movies, setMovies] = useState([])
	const [movieId, setMovieId] = useState(null)
	const [page, setPage] = useState(2)
	const [newItemLoading, setNewItemLoading] = useState(false)

	const movieService = new MovieService()

	useEffect(() => {
		getTrandingMovies()
	}, [])

	const onClose = () => setOpen(false)

	const onOpen = id => {
		setMovieId(id)
		setOpen(true)
	}

	const getTrandingMovies = page => {
		movieService
			.getTrandingMovies(page)
			.then(res => setMovies(movies => [...movies, ...res]))
			.catch(() => setError(true))
			.finally(() => {
				setLoading(false)
				setNewItemLoading(false)
			})
	}
	const getNewMovies = () => {
		setNewItemLoading(true)
		setPage(page => page + 1)
		getTrandingMovies(page)
	}

	const errorContent = error ? <Error /> : null
	const loadingContent = loading ? <Spinner /> : null
	const content = !(error || loading) ? (
		<Content movies={movies} onOpen={onOpen} />
	) : null

	return (
		<div className='rowmovies'>
			<div className='rowmovies__top'>
				<div className='rowmovies__top-title'>
					<img src='/tranding.svg' alt='' />
					<h1>Trending</h1>
				</div>
				<div className='hr' />
				<a href='#'>See more</a>
			</div>
			{loadingContent}
			{errorContent}
			{content}

			<div className='rowmovies__loadmore'>
				<button
					className='btn btn-secondary'
					onClick={getNewMovies}
					disabled={newItemLoading}
				>
					Load More
				</button>
			</div>
			<Modal open={open} onClose={onClose}>
				<MovieInfo movieId={movieId} />
			</Modal>
		</div>
	)
}

export default RowMovies

const Content = ({ movies, onOpen }) => {
	return (
		<div className='rowmovies__lists'>
			{movies.map(movie => (
				<RowMoviesItem key={movie.id} movie={movie} onOpen={onOpen} />
			))}
		</div>
	)
}
Content.propTypes = {
	movies: PropTypes.array,
	onOpen: PropTypes.func,
}
