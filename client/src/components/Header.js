import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { useEffect , useState} from 'react'


const Header = ({ title }) => {
    const [isLogged , setIsLogged] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('user_id'))
        {
            setIsLogged(true)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('user_id')
    }
    
    return (

        <header className=' md:px-16 sm:px-10 px-4 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-5 flex justify-between'>
            <Link to="/"><h1 className='text-black hover:text-sky-600 font-bold text-2xl'>{ title }</h1></Link>
            <div className='flex space-x-8 '>
                {! isLogged ? (
                        <>
                        <NavLink to="/Register" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded')}><button>Register</button></NavLink>
                        <Link to="/" className='text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded'><button>Login</button></Link>           
                        </>
                        ) 
                    : ( <>
                        <NavLink to="/HomePage" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded')}><button>Home</button></NavLink>
                        <Link to="/ContactUs"><button className='text-center hover:bg-sky-600  text-black hover:text-white py-0.5 px-2 rounded  '>Contact Us</button></Link>
                        <Link to="/"><button onClick={logout} className='text-center hover:bg-sky-600  text-black hover:text-white py-0.5 px-2 rounded  '>Logout</button></Link>           
                        </>
                    )
                }
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