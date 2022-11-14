import React from 'react'
import NavBar from './NavBar'
import NavItems from './NavItems'
import TravelTable from './TravelTable'
// import UsersTable from './UsersTable'

const Admin = () => {
    return (
        <div>
            <NavBar />
            <div className='flex'>
                <NavItems />
                <div className='flex justify-center w-full '>
                    <TravelTable />
                    {/* <UsersTable /> */}
                </div>
            </div>
        </div>
    )
}

export default Admin