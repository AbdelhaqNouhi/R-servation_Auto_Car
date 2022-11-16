import React, { useState } from 'react'
import moment from 'moment';
import { cities } from 'list-of-moroccan-cities'
import AsyncSelect from "react-select/async";

const Travel = ({setData}) => {

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

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departure_date, setDeparture_date] = useState('');

    const SearchTravel = async (e) => {

        e.preventDefault();
        await fetch(`http://localhost:8000/api/ShearchTravel/` + from + `/` + to + `/` + departure_date, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json())
        .then(data => {
            if(data) {
                setData(data);
            }else {
                console.log('this travel not found');
            }
        })
    }

    return (

        <form onSubmit={SearchTravel} className=" flex flex-col gap-10 bg-gradient-to-r from-slate-900 to-slate-600 p-8 text-white font-medium rounded-lg">
                <h1 className="font-bold text-xl">Make your holiday memorable</h1>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label>départure</label>
                        <AsyncSelect className='text-black'
                            loadOptions={loadCities}
                            defaultOptions={cities}
                            isClearable
                            value={from.name}
                            onChange={(e) => setFrom(e.name)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>destination</label>
                        <AsyncSelect className='text-black'
                            loadOptions={loadCities}
                            defaultOptions={cities}
                            isClearable
                            value={to.name}
                            onChange={(e) =>  setTo(e.name)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <label>date</label>
                    <input className="text-slate-400 bg-white p-2 rounded-md" type="date" id="date" min={today} placeholder="date" value={departure_date} onChange={(e) => setDeparture_date(e.target.value)} />
                    </div>
                </div>
                <button className="text-center bg-sky-700 hover:bg-sky-600 p-2 rounded-md">Find One</button>
        </form>
    )
}

export default Travel