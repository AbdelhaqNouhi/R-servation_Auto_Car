import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Header = ({ title }) => {
    return (
        <header className='container bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-5 flex justify-between'>
            <Link to="/"><h1 className='text-black hover:text-sky-600 font-bold text-2xl'>{ title }</h1></Link>
            <div className='flex space-x-8 '>
                <Link to="/"><button to="/Login" className='text-center hover:bg-sky-600  text-black hover:text-white py-0.5 px-2 rounded  '>Home</button></Link>
                <Link to="/Login"><button to="/Login" className='text-center hover:bg-sky-600  text-black hover:text-white py-0.5 px-2 rounded  '>Login</button></Link>
                <Link to="/Register"><button to="/Register" className='text-center hover:bg-sky-600 text-black hover:text-white py-0.5 px-2 rounded'>Register</button></Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Travels'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header