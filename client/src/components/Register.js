import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [full_name, setFull_name] = useState('');
    const [email , setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();

        const User = {full_name, email, phone, password}

        fetch('http://localhost:8000/api/RegisterUser', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(User)
        }).then(() => {
            console.log('new user added');
            navigate('/');
        })
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handelSubmit} className=" w-2/6 flex flex-col gap-5 bg-gradient-to-r from-slate-900 to-slate-600 p-7 my-12 text-white font-medium rounded-lg">
                <h1 className="font-bold text-xl">Register</h1>
                <div className="flex flex-col gap-3 text-white">
                    <label>Full Name</label>
                    <input type="text" placeholder="Full Name" className=" px-2 py-2 rounded text-black" required value={full_name} onChange={(e) => setFull_name(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3 text-white">
                    <label>E-mail</label>
                    <input type="email" placeholder="E-mail" className=" px-2 py-2 rounded text-black" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3 text-white">
                    <label>Phone</label>
                    <input type="tel" placeholder="Phone" className=" px-2 py-2 rounded text-black" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3 text-white">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className=" px-2 py-2 rounded text-black" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="bg-sky-700 hover:bg-sky-600 p-2 rounded-md">Register</button>
        </form>

            <div>
                {/* <div className="">
                    <img
                        className="max-w-sm rounded-2xl mt-28 "
                        src={require("../assets/images/chinh-le-duc-8DG9zdUcxVg-unsplash(1).jpg")}
                        alt="we care family"
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Register