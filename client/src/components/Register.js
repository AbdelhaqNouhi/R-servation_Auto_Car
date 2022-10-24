import React from 'react'

const Register = () => {
    return (
        <div>
            <div>
                <div className="bg-[#372948] flex justify-center flex-col gap-8 mx-3.5 my-12  p-12 rounded">
                    <h1 className="font-bold text-white text-2xl">Login</h1>
                    <div className="flex flex-col gap-3 text-white">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" className=" px-2 py-2 rounded text-black" />
                    </div>
                    <div className="flex flex-col gap-3 text-white">
                        <label>E-mail</label>
                        <input type="email" placeholder="E-mail" className=" px-2 py-2 rounded text-black" />
                    </div>
                    <div className="flex flex-col gap-3 text-white">
                        <label>Password</label>
                        <input type="password" placeholder="Password" className=" px-2 py-2 rounded text-black" />
                    </div>

                    <button className=" px-2 py-2 rounded text-black bg-[#ffcaca] font-bold text-center">Login</button>

                </div>
            </div>
        </div>
    )
}

export default Register