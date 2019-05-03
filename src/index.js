import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BasicErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null}
      }

    static propTypes = {
        fallback: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
        onError: PropTypes.func
    }

    static defaultProps = {
        fallback: () => null
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        const {onError} = this.props
        if (typeof onError === 'function') {
            onError(error, info)
        }
    }


    render() {
        const {hasError, error} = this.state
        const {children, fallback} = this.props

        if (hasError) {
            return fallback(error)
        }

        return children
    }
}

export default BasicErrorBoundary