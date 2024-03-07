import './movie-info.scss'
import prevImg from '/image1.svg'

const MovieInfo = () => {
	return (
		<div className='movieinfo'>
			<img src={prevImg} alt='img' />
			<div className='movieinfo-descr'>
				<h1>Movie Title</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam
					placeat odio in ab atque explicabo alias quia, eveniet, officia
					corporis? Magni est repudiandae voluptatem molestiae facilis enim
					cumque ipsum ad tempora, optio quis.
				</p>
			</div>
		</div>
	)
}

export default MovieInfo
