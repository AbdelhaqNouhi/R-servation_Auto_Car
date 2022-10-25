
const HomePage = () => {
    return (
        <div className="container w-full inset-0 h-full object-cover object-center mt-10 mb-24">
            <div className="images">
                <div className="absolute">
                    <img
                        className="max-w-sm rounded-2xl mt-28 "
                        src={require("../assets/images/backgound.jpg")}
                        alt="we care family"
                    />
                </div>
                <div className="relative">
                    <img
                        className="max-w-sm rounded-2xl ml-72"
                        src={require("../assets/images/annie-spratt-tG822f1XzT4-unsplash.jpg")}
                        alt="wez care family"
                    />
                </div>
                <div className="">
                    <img
                        className="max-w-sm rounded-2xl ml-72 mt-16"
                        src={require("../assets/images/annie-spratt-tG822f1XzT4-unsplash.jpg")}
                        alt="wez care family"
                    />
                </div>
            </div>

            <div className="form">
                <div>
                    <h1>Make your holiday memorable</h1>

                    <div className="s_d">
                        <label>départure</label>
                        <input type="text" placeholder="départure"/>

                        <label>destination</label>
                        <input type="text" placeholder="destination" />
                    </div>

                    <div className="d_p">
                        <label>date</label>
                        <input type="date" placeholder="date" />

                        <label>dperson</label>
                        <input type="number" placeholder="person" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage