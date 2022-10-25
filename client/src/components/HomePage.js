
const HomePage = () => {
    return (
        <div className="w-full inset-0 h-full object-cover object-center mt-8 mb-24 flex justify-around flex gap-16">
            <div className="images">
                <div className="absolute">
                    <img
                        className="max-w-sm rounded-2xl mt-28 "
                        src={require("../assets/images/chinh-le-duc-8DG9zdUcxVg-unsplash(1).jpg")}
                        alt="we care family"
                    />
                </div>
                <div className="relative">
                    <img
                        className="max-w-sm rounded-2xl ml-72"
                        src={require("../assets/images/backgound.jpg")}
                        alt="wez care family"
                    />
                </div>
                <div className="">
                    <img
                        className="max-w-sm rounded-2xl ml-72 mt-8"
                        src={require("../assets/images/annie-spratt-tG822f1XzT4-unsplash.jpg")}
                        alt="wez care family"
                    />
                </div>
            </div>

            <div className="form flex flex-col gap-6 bg-gradient-to-r from-sky-500 to-indigo-500 p-8 text-white font-medium rounded-lg">
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

                <button className="bg-gradient-to-r from-slate-900 to-slate-600 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-md">Find One</button>
            </div>
        </div>
    )
}

export default HomePage