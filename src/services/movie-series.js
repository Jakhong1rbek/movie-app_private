class MovieSeries {
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
}
export default MovieSeries
