import React from 'react'
import { cities } from 'list-of-moroccan-cities'
import AsyncSelect from "react-select/async";

const Travel = () => {

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

    return (

        <div className=" flex flex-col gap-6 bg-gradient-to-r from-slate-900 to-slate-600 p-8 text-white font-medium rounded-lg">
            <h1 className="font-bold text-xl">Make your holiday memorable</h1>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label>départure</label>
                    <AsyncSelect className='text-black'
                        loadOptions={loadCities}
                        defaultOptions={cities}
                        isClearable
                        // onChange={ handleChange }
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>destination</label>
                    <AsyncSelect className='text-black'
                        loadOptions={loadCities}
                        defaultOptions={cities}
                        isClearable
                    // onChange={ handleChange }
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label>date</label>
                    <input className="text-slate-400 bg-white p-2 rounded-md" type="date" placeholder="date" />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Person</label>
                    <input className="text-slate-400 bg-white p-2 rounded-md" type="number" placeholder="person" />
                </div>
            </div>

            <button className="text-center bg-sky-700 hover:bg-sky-600 p-2 rounded-md">Find One</button>
        </div>
    )
}

export default Travel