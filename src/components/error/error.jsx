import './error.scss'
import errorGif from '/error.gif'
const Error = () => {
	return (
		<div className='center'>
			<img src={errorGif} alt='' className='errormeassage' />
		</div>
	)
}
export default Error
