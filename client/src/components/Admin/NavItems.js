import React from 'react'

const NavItems = () => {
  return (
    <header className='w-1/4 lg:w-52 md:w-1/5 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <div className='flex-col flex gap-10 h-screen pt-6'>
          <button className='text-center hover:bg-sky-600 text-black hover:text-white py-1.5 px-2 rounded'> Users </button>
          <button className='text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded'> Tickets </button>
          <button className='text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded'> Travels </button>
          <button className='text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded'> Logout </button>
      </div>
    </header>
  ) 
}

export default NavItems