class MovieService {
	_apiBase = 'https://api.themoviedb.org/3'
	_apiLang = 'language=en-US'
	_apiKey = 'api_key=66fe14424f1fe640cf3d3aebaa4b9988'
	_apiImage = 'https://image.tmdb.org/t/p/original'
	getResource = async url => {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, status: ${response.status}  `)
		}
		return await response.json()
	}
	getPopularMovie = async () => {
		return this.getResource(
			`${this._apiBase}/movie/popular?${this._apiLang}&${this._apiKey}`
		)
	}
	getTrendingMovie = async () => {
		return this.getResource(
			`${this._apiBase}/tv/top_rated?${this._apiLang}&${this._apiKey}`
		)
	}
	getDetailedMovie = id => {
		return this.getResource(
			`${this._apiBase}/movie/${id}?${this._apiLang}&${this._apiKey}`
		)
	}
	getRandomMovie = async () => {
		const res = await this.getPopularMovie()
		const movie = res.results[Math.floor(Math.random() * res.results.length)]
		return this._transformMovies(movie)
	}
	_transformMovies = movie => {
		return {
			name: movie.original_title,
			description: movie.overview,
			thumbnail: `${this._apiImage}${movie.poster_path}`,
			id: movie.id,
		}
	}
}
export default MovieService
