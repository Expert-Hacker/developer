import React from 'react'
import '../App.css'
import bg2 from '../images/home_bg2.png'
import home_bg from '../images/home_bg.jpg'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home_out_div">
            <div className="outer_div container">
                    <div className="left">
                        <h4 className="display-6 fw-bold text-dark mt-5">Welcome to</h4>
                        <h2 className="display-1 fw-bold text-primary img-fluid shadow p-3 mb-5 bg-white rounded w-75 mr-0">MERN stack Development</h2>
                          {/* button goes here */}
                           <Link to="/landingpage"> <button type="button" class="btn btn-warning w-25 fw-bold fs-5">Get Started<i class="px-2 fas fa-arrow-circle-right fs-5"></i></button></Link>
                        {/* button ends here */}
                    </div>
                  
                    <div className="right_home">
                        <img className="img-fluid" src={bg2} alt="" height="400px" />
                    </div>
                   
            </div>
            <hr />
        </div>
        
    )
}

export default Home
