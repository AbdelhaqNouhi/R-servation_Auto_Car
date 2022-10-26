import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header className='container bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-5 flex justify-between'>
            <h1 className='text-black hover:text-sky-600 font-bold text-2xl'>{ title }</h1>
            <div className='flex space-x-8 '>
                <button className='text-center hover:bg-sky-600 text-black hover:text-white py-0.5 px-2 rounded  '>Login</button>
                <button className='text-center hover:bg-sky-600 text-black hover:text-white py-0.5 px-2 rounded'>Register</button>

                {/* bg-gradient-to-r from-slate-900 to-slate-600 hover:from-pink-500 hover:to-yellow-500 */}
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