// import axios from 'axios';
import React, {useState, useEffect} from 'react'
import moment from 'moment';
import { cities } from 'list-of-moroccan-cities'
import AsyncSelect from "react-select/async";
import AddTravelForm from './AddTravelForm'

const TravelTable = () => {

    const now = moment();
    const today = now.format('YYYY-MM-DD');

    const loadCities = (searchValue, callback) => {
        setTimeout(() => {
            const filteredCities = cities.filter((item) =>
                item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()
                )
            );
            console.log("loadCities", searchValue, filteredCities);
            callback(filteredCities);
        }, 200);
    };

    const [showModalAdd, setShowModalAdd] = useState(false)
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [box, setBox] = useState([])

    const GetAllTravel = () => {
        fetch('http://localhost:8000/api//GetAllTravel')
        .then((response) => response.json())
        .then((data) => setBox(data))
    }

    useEffect(() => {
        GetAllTravel();
    },[])
    
    return (
        
        <div class="flex flex-col mt-6 p-8">
            <AddTravelForm isVisible={showModalAdd} onClose={() => setShowModalAdd(false)}>
                <div className='flex flex-col gap-8'>
                    <h1 className="font-bold text-xl">Add A New Travel !</h1>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-64">
                            <label>From</label>
                            <AsyncSelect className='text-black'
                                loadOptions={loadCities}
                                defaultOptions={cities}
                                isClearable
                            // onChange={ handleChange }
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-64">
                            <label>To</label>
                            <AsyncSelect className='text-black'
                                loadOptions={loadCities}
                                defaultOptions={cities}
                                isClearable
                            />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-64">
                            <label>Departure Time</label>
                            <input className="text-slate-400 bg-white p-2 rounded-md" type="time" id="appt" name="appt" min="09:00" max="18:00" required />
                        </div>
                        <div className="flex flex-col gap-2 w-64">
                            <label>Departure Date</label>
                            <input className="text-slate-400 bg-white p-2 rounded-md" type="date" id="date" min={today} placeholder="Departure Date" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-64">
                            <label>Arrival Time</label>
                            <input className="text-slate-400 bg-white p-2 rounded-md" type="time" id="appt" name="appt" min="09:00" max="18:00" required />
                        </div>
                        <div className="flex flex-col gap-2 w-64">
                            <label>Arrival Date</label>
                            <input className="text-slate-400 bg-white p-2 rounded-md" type="date" id="date" min={today} placeholder="Arrival Date" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-64">
                            <label>Seats Total</label>
                            <input className="text-slate-400 bg-white p-2 rounded-md" type="number" placeholder="Seats Total" />
                        </div>
                        <div className="flex flex-col gap-2 w-64">
                            <label>Price</label>
                            <input className="text-slate-400 bg-white p-2 rounded-md" type="number" placeholder="Price" />
                        </div>
                    </div>
                    <button className="text-center w-full bg-sky-700 hover:bg-sky-600 p-2 rounded-md">Added One</button>
                </div>
            </AddTravelForm>
            
            <AddTravelForm isVisible={showModalUpdate} onClose={() => setShowModalUpdate(false)}>
                    <h1>hhhhhhhhhhhhhhh</h1>
            </AddTravelForm>
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 ">
                <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                    <div className='flex justify-between px-8 py-4 bg-white items-center text-center'>
                        <h1 className='font-bold'>Lists travel</h1>
                        <button onClick={() => setShowModalAdd(true)} className='text-center bg-sky-600 text-white py-1.5 px-2 rounded font-bold w-32'> Add Travel </button>
                    </div>
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                {/* <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    _id
                                </th> */}
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    From
                                </th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    To
                                </th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    departure_date_time
                                </th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    arrival_date_time
                                </th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    seats_total
                                </th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    reserved_seat
                                </th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200">
                                    Break_point
                                </th>
                                <th class="px-6 py-3 bg-gray-100 border-b border-gray-200">
                                    More
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                        {box && box.length > 0 && box.map((boxObj, index ) => (
                            <tr>
                                {/* <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm leading-5 text-gray-500">
                                                {boxObj._id}
                                            </div>
                                        </div>
                                    </div>
                                </td> */}
                                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                    <div class="text-sm leading-5 text-gray-900">
                                        {boxObj.from}
                                    </div>
                                </td>

                                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                    <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-yellow-100 rounded-full">
                                        {boxObj.to}
                                    </span>
                                </td>

                                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                                    {boxObj.departure_date} at {boxObj.departure_time}
                                </td>

                                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                                    {boxObj.arrival_date} at {boxObj.arrival_time}
                                </td>

                                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                                    {boxObj.seats_total}
                                </td>

                                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                                    {boxObj.reserved_seat}
                                </td>

                                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                                    {boxObj.Break_point}
                                </td>

                                <td class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                                    <div class="flex justify-around">
                                        <span class="text-yellow-500 flex justify-center">

                                            {/* <form> */}
                                                <button class="mx-1 px-2 rounded-md" >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-5 w-5 text-red-700"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                                
                                                <button onClick={() => setShowModalUpdate(true)} class="mx-1 px-2 rounded-md" >
                                                    <svg id="Layer_1" data-name="Layer 1" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4 text-green-700" 
                                                        viewBox="0 0 122.61 122.88"
                                                        fill="currentColor"
                                                        >
                                                        <path 
                                                            fill-rule="evenodd" 
                                                            d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"
                                                            clip-rule="evenodd"
                                                        />
                                                        </svg>
                                                </button>
                                            {/* </form> */}
                                        </span>
                                    </div>
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

export default TravelTable