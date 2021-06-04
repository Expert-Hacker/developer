import React from 'react'
import passport from '../images/passport.png'
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import '../App.css'
function About() {
    const [user,setUser] = useState({})
    const history = useHistory();
    async function callAboutpage()
    {
          
        try {
            const res =await fetch("/about",{
                 method:"GET",
                 headers:{
                     Accept:"application/json",
                    "Content-Type":"application/json"
                    },
                credentials:'include'});
                    
                // reeciving responce with complete user information
                const data = await res.json()
                console.log("data" +data)
                // setting data in userState hook
                setUser(data)


                if(!(res.status===200))
                {
                   throw new Error("not authorized in about")
                }
            
        } catch (er) {
            console.log(er)
            history.push('/login')
        }
    }
    useEffect(() => {
        callAboutpage();   
    }, [])
    return (
        <div>
            <form method="GET">
        <div className="contact_out_cont">
            <div className="contact_div shadow-lg p-3 mb-5 bg-body rounded ">
                <div className="left_about pt-5 pb-5">
                    <h2 className="pb-2">About me</h2>
                        <img className="border border-dark" src={passport} alt="" height="200px"/>
                </div>
                <div className="right ">
                    <div className="about_details pt-5 ">
                        <div className="name_div d-flex justify-content-between">
                            <h4 className="text-primary fw-bold">Name:</h4>
                            <h4 className="fw-bold">{user.name}</h4>
                        </div>
                        <div className="id d-flex justify-content-between">
                            <h4 className="text-primary fw-bold">User ID:</h4>
                            <h4>{user._id}</h4>
                        </div>
                        <div className="email_div d-flex justify-content-between">
                            <h4 className="text-primary fw-bold">Email:</h4>
                            <h4>{user.email}</h4>
                        </div>
                        <div className="interest d-flex justify-content-between">
                            <h4 className="text-primary fw-bold">Interest:</h4>
                            <h4>{user.interest}</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
    )
}

export default About
