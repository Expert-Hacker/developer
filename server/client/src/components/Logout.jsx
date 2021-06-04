import React from 'react'
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
function Logout() {
    
  
    const history = useHistory();
    async function callAboutpage()
    {
          
        try {
            const res =await fetch("/logout",{
                 method:"GET",
                 headers:{
                     Accept:"application/json",
                    "Content-Type":"application/json"
                    },
                credentials:'include'}).then((res)=>
                history.push('/login'));
   
                if(!(res.status===200))
                {
                   throw new Error("not authorized in logout")
                }
            
        } catch (er) {
            console.log(er)
          
        }
    }
    useEffect(() => {
        callAboutpage();   
    }, [])
    
    
    
    
    
    return (
        <div>
            <h1>this page is not visible to user</h1>
        </div>
    )
}

export default Logout
