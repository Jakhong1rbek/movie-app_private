import './navbar.scss'
import logoText from '/logo-text.svg'
import logo from '/logo.svg'
const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<a href='#'>
					<img src={logo} alt='logo' />
					<img src={logoText} alt='logo-text' />
				</a>
			</div>
			<div className='navbar__menu'>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>TV Shows</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
