import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Start a Booking',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header