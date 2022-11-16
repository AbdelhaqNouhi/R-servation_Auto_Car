import Travel from "../TravelForm"
import Header from "../Header"
import Footer from "../Footer"
import ShowTravel from "../ShowTravel"
import { useState } from "react"

const HomePage = () => {
    const [data , setData] = useState([])
    return (
        <div className="">
            <Header title='Travels' />
            <div className="h-full mt-8 mb-24 flex md:justify-around justify-center">
                <div className="images hidden md:block h-full">
                    <div className="absolute">
                        <img
                            className="max-w-sm rounded-2xl mt-28 "
                            src={require("../../assets/images/chinh-le-duc-8DG9zdUcxVg-unsplash(1).jpg")}
                            alt="we care family"
                        />
                    </div>
                    <div className="relative">
                        <img
                            className="max-w-sm rounded-2xl lg:ml-72"
                            src={require("../../assets/images/backgound.jpg")}
                            alt="wez care family"
                        />
                    </div>
                    <div className="">
                        <img
                            className="max-w-sm rounded-2xl lg:ml-72 mt-8"
                            src={require("../../assets/images/annie-spratt-tG822f1XzT4-unsplash.jpg")}
                            alt="wez care family"
                        />
                    </div>
                </div>    
                <Travel setData={setData}/>
            </div>
            <ShowTravel data={data} />
            <Footer />
        </div>
    )
}

export default HomePage