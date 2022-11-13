import React from 'react'
import NavBar from './NavBar'
import NavItems from './NavItems'
import TravelTable from './TravelTable'

const Admin = () => {
    return (
        <div>
            <NavBar />
            <div className='flex'>
                <NavItems />
                <div className='flex justify-center w-full '>
                    <TravelTable />
                </div>
            </div>
        </div>
    )
}

export default Admin