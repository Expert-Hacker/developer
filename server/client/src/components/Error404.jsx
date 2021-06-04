import React from 'react'
import errimg from '../images/error4.png'
import '../App.css'
import {Link} from 'react-router-dom'

function Error404() {
    return (
        <div className="outer_error">
            <div className="error_div">
                <img src={errimg} alt="error" height="450px" />
                <h1 className="display-3 fw-bold">Page Not Found!</h1>
               <Link to="/"><button className="btn btn-warning w-20 bg-warning"><i className=" fas fa-arrow-left">  Back to Home</i></button></Link> 
            </div>
        </div>
        
    )
}

export default Error404
