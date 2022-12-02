import React, { useEffect } from 'react'
import { useState } from 'react'


const ShowTravel = ({data, start, end, date}) => {


    useEffect(()=>{

    },[data, start, end, date])


    return (
        <div className='container '>
            <div className=" w-full mb-10 py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 flex flex-col gap-8">
                {/* {!formdate? ( */}
                <div>
                    <tr className='w-full flex justify-between bg-gray-100 border-b border-gray-200 shadow sm:rounded-lg'>
                        <th className="px-6 py-6 text-xs font-bold leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b  border-gray-200 shadow sm:rounded-lg">
                            {start}
                        </th>
                        <th className="px-6 py-6 text-xs font-bold leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b  border-gray-200 shadow sm:rounded-lg">
                            {end}
                        </th>
                        <th className="px-6 py-6 text-xs font-bold leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-100 shadow sm:rounded-lg">
                            {date}
                        </th>
                    </tr>
                </div>
                {/* ) : ('')
                } */}
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full">
                        <tbody className="bg-white">
                            {data && data.length > 0 && data.map((dataObj, index) => (
                                <tr>
                                <td className="px-12 py-4 border-b text-gray-800 whitespace-nowrap">
                                        {dataObj.from}
                                    </td>
                                    <td className="px-12 py-4 border-b text-gray-800 whitespace-nowrap">
                                        {dataObj.to}
                                    </td>
                                <td className=" py-4 px-10 border-b text-gray-800 whitespace-nowrap">
                                        {dataObj.departure_date}
                                    </td>
                                <td className="py-4 border-b text-gray-800 whitespace-nowrap">
                                        {dataObj.price}
                                    </td>
                                <td className="py-8 px-6 text-white font-medium text-right border-b border-gray-200 whitespace-nowrap">
                                    <button className="w-24 bg-sky-700 hover:bg-sky-600 p-2 rounded-md  ">Booking!</button>
                                </td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowTravel