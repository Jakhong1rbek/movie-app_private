import MovieSeries from '../../services/movie-series'
import Hero from '../hero/hero'
import Navbar from '../navbar/navbar'
import RowMovies from '../row-movie/row-movies'

const App = () => {
	const movieSeries = new MovieSeries()

	movieSeries.getTrendingMovie().then(data => console.log(data))
	return (
		<div className='app'>
			<Navbar />
			<Hero />
			<RowMovies />
		</div>
	)
}

export default App
