import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header className='container bg-[#251B37] py-5 flex justify-between'>
            <h1 className='text-white font-bold text-2xl'>{ title }</h1>
            {/* <div className='flex space-x-8 '>
                <button className='bg-[#ffcaca] hover:bg-[#FFECEF] font-bold text-[#251B37] py-0.5 px-2 rounded'>Register</button>
                <button className='bg-[#FFCACA] hover:bg-[#FFECEF] font-bold text-[#251B37] py-0.5 px-2 rounded'>Login</button>
            </div> */}
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