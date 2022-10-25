import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header className='container bg-slate-900 py-5 flex justify-between'>
            <h1 className='text-white font-bold text-2xl'>{ title }</h1>
            <div className='flex space-x-8 '>
                <button className='bg-gradient-to-r from-sky-700 to-indigo-600 text-white py-0.5 px-2 rounded'>Login</button>
                <button className='bg-gradient-to-r from-sky-700 to-indigo-600 text-white py-0.5 px-2 rounded'>Register</button>
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