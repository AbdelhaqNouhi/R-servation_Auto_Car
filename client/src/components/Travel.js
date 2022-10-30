import React from 'react'

const Travel = () => {


    return (

        <div className=" flex flex-col gap-6 bg-gradient-to-r from-slate-900 to-slate-600 p-8 text-white font-medium rounded-lg">
            <h1 className="font-bold text-xl">Make your holiday memorable</h1>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label>départure</label>
                    <select className="text-slate-400 bg-white p-2 rounded-md">
                        <option value="" disabled selected hidden>Select départure</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label>destination</label>
                    <select className="text-slate-400 bg-white p-2 rounded-md">
                        <option value="" disabled selected hidden>Select destination</option>
                    </select>
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