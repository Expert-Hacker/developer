import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import '../App.css';
import image from '../images/program2.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

let name, value
function Login() {
    const history= useHistory()
   
    const[user,setUser] = useState({
        email:"",
        password:""
    })

    function handleInputs(e)
    {
            name=  e.target.name;
            value= e.target.value;
            setUser({...user,[name]:value})
    }

       async function postData(e)
        {
                const{email,password} = user;
            
                e.preventDefault();
                const responce =await fetch("/login" ,{
                                method:"POST",
                                headers:{
                                        "Content-Type":"application/json"
                                        },
                                        // converting JSON format into String brfore sending it to the server
                                body:JSON.stringify({
                                    email,password
                                        })
                            })
                            const data = responce.json();
                            if(responce.status===400 || !data)
                            {
                                    window.alert("invalid Login")
                            }
                            else{
                                window.alert("login success");
                                history.push("/landingpage",)
                            }
        }


    return (
        <form method="POST" className="signup_form mb-2">
        <div className="outer_cont mt-5 shadow-lg p-3 mb-5 bg-body rounded">
            <div className="left mx-3 my-2 ">
                    <div className="heading mb-5">
                        <h1>Login</h1>
                    </div>
                    {/* inputs */}
                    
                    <div className="inputs2">
                        <i class="fas fa-envelope fa-2x"></i>
                        <input  className="form-control mb-3" onChange={handleInputs} name="email" value={user.email}  type="email" placeholder="Your Email"/>
                    </div>
                    
                    <div className="inputs4">
                        <i class="fas fa-key fa-2x"></i>
                        <input  className="form-control mb-3" onChange={handleInputs} name="password" value={user.password} type="number" placeholder="Password" />
                    </div>
                   
                    {/* buttons */}
                    <div className="btns_grp">
                        <div className="Signup_btn">
                        <Link to="/signup"><button type="button" class="btn btn-primary mx-2 fw-bold px-4">Sign up</button></Link>
                        </div>
                        <div className="_btn">
                            <button type="button" onClick={postData} class="btn btn-success text-white fw-bold px-4">Sign In</button>
                        </div>
        </div>
                            {/* button ends */}
            </div>
            <div className="right mt-5">
                <div className="heading2 "> 
                </div>
                <div className="image_div">
                    <img className="m-0 img-fluid" src={image} width="300px" />
                </div>
            </div>
            
        </div>
        <hr />


    </form>
    
    )
}

export default Login
