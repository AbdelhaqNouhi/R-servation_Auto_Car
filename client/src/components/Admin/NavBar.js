import React from 'react'

const NavBar = () => {
    return (
        <header className='lg:container md:px-16 sm:px-10 px-4 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-5 flex justify-between items-center'>
            <h1 className=' text-black hover:text-sky-600 font-bold text-2xl'>Travel</h1>

            <div class="">
                <input className='items-center w-40 md:w-80 max-w-xs px-3 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-600  focus:ring-sky-600' type='text' placeholder='Shearch' />
                
                {/* <div class="flex absolute inset-y-0 items-center pl-40">
                    <img className='w-4 h-4' src={require("../../assets/icons/search.png")}></img>    
                </div> */}
            </div>
            <div className='flex space-x-4 items-center'>
                <h1>Abdelhaq Nouhi</h1>
                <img src={require("../../assets/images/user-image.JPG")} className='object-cover inset-0 h-9 w-9 rounded-full'></img>
            </div>
        </header>
    )
    added NavBar Admin component
}

export default NavBar