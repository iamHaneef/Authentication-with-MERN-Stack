import React from "react";
import { useLocation } from "react-router-dom";

function Home()  {
    const location=useLocation()
    return(
        <div  className="homepage">
            <h1>Hii ! {location.state.id} and welcome to the MongoDB Tutorial</h1> {/* email show case*/}
        </div>
    )
}
export default Home;