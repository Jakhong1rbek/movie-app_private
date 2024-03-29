import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import MovieService from '../../services/movie-service'
import Error from '../error/error'
import Spinner from '../spinner/spinner'
import './movie-info.scss'

const MovieInfo = ({ movieId }) => {
	const [movie, setMovie] = useState(null)
	const [loading, setLodaing] = useState(false)
	const [error, setError] = useState(false)
	const movieService = new MovieService()

	useEffect(() => {
		updateMovie()
	}, movieId)

	const updateMovie = () => {
		if (!movieId) {
			return
		}
		setLodaing(true)

		movieService
			.getDetailedMovie(movieId)
			.then(res => setMovie(res))
			.catch(() => setError(true))
			.finally(() => setLodaing(false))
	}

	const initialContent = movie || loading || error ? null : <Spinner />
	const errorContent = error ? <Error /> : null
	const loadingContent = loading ? <Spinner /> : null
	const content = !(error || loading || !movie) ? (
		<Content movie={movie} />
	) : null

	return (
		<div className='movieinfo'>
			{initialContent}
			{errorContent}
			{loadingContent}
			{content}
		</div>
	)
}

export default MovieInfo

const Content = ({ movie }) => {
	return (
		<>
			<img src={movie.backdrop_path} alt='img' />

			<div className='hero__movie-descr'>
				<h2>{movie.name}</h2>
				<p>{movie.description}</p>
			</div>
		</>
	)
}
MovieInfo.propTypes = {
	movieId: PropTypes.element,
}
Content.propTypes = {
	movie: PropTypes.element,
}
