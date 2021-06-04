import React from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
function Landingpage() {

    const [user,setUser] = useState({})
    const history = useHistory();
    async function callAboutpage()
    {
          
        try {
            const res =await fetch("/landingpage",{
                 method:"GET",
                 headers:{
                     Accept:"application/json",
                    "Content-Type":"application/json"
                    },
                credentials:'include'});

                // const data =await res.json();
                const data = await res.json()

                console.log("data" +data)
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
        <form method="GET">
        <div className="landingpg_outer">
            <div className="landingpage_half">
                <h1 className="display-3 fw-bold">Hii,<span className="text-primary">{user.name}</span></h1>
                <h2>Welcome to MERN stack Development 🥇</h2>
            </div>
        </div>
        </form>
    )
}

export default Landingpage
