import Travel from "./Travel"

const HomePage = () => {
    return (
        <div className="">
            <div className=" inset-0 h-full object-cover object-center mt-8 mb-24 flex justify-around flex gap-16">
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
                <Travel />
            </div>
        </div>
    )
}

export default HomePage