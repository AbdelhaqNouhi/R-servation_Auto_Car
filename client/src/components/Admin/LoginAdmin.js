import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const LoginAdmin = () => {

    const error = ''
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api//LoginAdmin', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => res.json ())
        .then((data) => {
            // const user_id = data._id
            if (data) {
                console.log(data);
                // localStorage.setItem('user_id', JSON.stringify(user_id))
                // navigate('/HomePage');
            }
        })
        .catch((err) => {
            console.log(err.msg);
        })
    }

    return (
        <div className="flex justify-center my-24">
            <form onSubmit={handelSubmit} className="w-4/5 lg:w-2/6 md:w-5/4 sm:w-2/4 flex flex-col gap-6 bg-gradient-to-r from-slate-900 to-slate-600 p-8 text-white font-medium rounded-lg">
                <h1 className="font-bold text-xl">Login Admin</h1>

                {error ? (
                    <div className="text-red">
                        <p>E-mail Or Password ivalide?</p>
                    </div>
                ) : ''
                }

                <div className="flex flex-col gap-3 text-white">
                    <label>E-mail</label>
                    <input type="email" placeholder="E-mail" className=" px-2 py-2 rounded text-black" required value={formData.email} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-3 text-white">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className=" px-2 py-2 rounded text-black" required value={formData.password} onChange={handleChange}/>
                </div>

                <button className="bg-sky-700 hover:bg-sky-600 p-2 rounded-md">Login</button>
            </form>

            {/* <div className="">
                <img
                    className="max-w-sm rounded-2xl mt-28 "
                    src={require("../assets/images/chinh-le-duc-8DG9zdUcxVg-unsplash(1).jpg")}
                    alt="we care family"
                />
            </div> */}
        </div>
    )
}

export default LoginAdmin