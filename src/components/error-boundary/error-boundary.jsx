import PropTypes from 'prop-types'
import React from 'react'
import Error from '../error/error'

class ErrorBoundary extends React.Component {
	state = {
		error: false,
	}
	componentDidCatch() {
		this.setState({ error: true })
	}
	render() {
		if (this.state.error) {
			return <Error />
		}
		// eslint-disable-next-line react/prop-types
		return this.props.children
	}
}
ErrorBoundary.PropTypes = {
	children: PropTypes.array,
}

export default ErrorBoundary
