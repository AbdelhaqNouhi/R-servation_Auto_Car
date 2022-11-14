import React from 'react'

const AddTravelForm = ( {isVisible, onClose, children }) => {
    if (!isVisible ) return null;

    const handelClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handelClose}>
            <div className=' flex justify-between bg-sky-600 w-[600px] p-4 rounded'>
                <div>
                    {children}
                </div>
                <button onClick={() => onClose()}>X</button>
            </div>
        </div>
    )
}

export default AddTravelForm