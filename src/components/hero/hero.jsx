import './hero.scss'

const Hero = () => {
	return (
		<div className='app__hero'>
			<div className='app__hero-info'>
				<h2>FIND MOVIES</h2>
				<h1>TV shows and more</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
					sapiente sit placeat minus dolorum, magnam, tempora quas neque quasi,
					sequi odit doloremque velit saepe autem facilis! Laudantium
					consequatur accusantium mollitia.
				</p>
				<button className='btn btn__primary'>DETAILS</button>
			</div>
			<div className='app__hero-moive'>
				<img src='/image1.svg' alt='img' />
				<div className='app__hero-moive__descr'>
					<h2>Madellin</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
						laboriosam id aperiam tempore dolorem fuga, qui iure veniam,
						repellat in, labore distinctio numquam excepturi? Quam aspernatur
						sint fuga debitis earum?
					</p>
					<div>
						<button className='btn btn__secondary'>RANDOM MOVIE</button>
						<button className='btn btn__primary'>DETAILS</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
