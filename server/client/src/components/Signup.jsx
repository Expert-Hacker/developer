import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../App.css';
import image from '../images/program1.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
// import AccountBoxIcon from ''

function Signup() {
    // for rendering next page after signup
    const history = useHistory();
                    let name,value;
                    const [user,setUser]=useState({
                        name:"",
                        email:"",
                        interest:"",
                        password:"",
                        cpassword:""               
                        })
                        
                        // when user enter data in input field
                        function handleInputs(e)
                        {
                            console.log(e.value)
                            name=  e.target.name;
                            value= e.target.value;
                            setUser({...user,[name]:value})
                        }

                       // when user click on signup button (post data)
                        async function postData(e)
                        {
                           
                            const {name, email,interest,password,cpassword} = user;
                            e.preventDefault();
                            const res =await fetch("/register" ,{
                                            method:"POST",
                                            headers:{
                                                    "Content-Type":"application/json"
                                                    },
                                                    // converting JSON format into String brfore sending it to the server
                                            body:JSON.stringify({
                                                name, email,interest,password,cpassword
                                                    })
                                        })
                                        // console.log(data)
                            const data = res.json();
                            console.log("Responce res  " +res)
                            console.log("Responce code  " +data)
                            if(res.status===400 || !data)
                            {
                                    window.alert("invalid reg")
                            }
                            else{
                                window.alert("reg success");
                                history.push("/login")
                            }
                        }

    return (   
               
                <form method="POST" className="signup_form mb-2">
                    <div className="outer_cont mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="left mx-3 my-2 ">
                                <div className="heading mb-5">
                                    <h1>SignUp</h1>
                                </div>
                                {/* inputs */}
                                <div className="inputs1 inputs_div">
                                    <i className="fas fa-user-circle fa-2x"></i>
                                    <input className="form-control mb-3" type="text" name="name" aria-label="default input example" placeholder="Your Name "value={user.name}  onChange={handleInputs}/>
                                </div>
                                <div className="inputs2">
                                    <i className="fas fa-envelope fa-2x"></i>
                                    <input  className="form-control mb-3" type="email" name="email" placeholder="Your Email"value={user.email} onChange={handleInputs} />
                                </div>
                                <div className="inputs3">
                                <i className="fas fa-globe-asia fa-2x"></i>
                                    <input  className="form-control mb-3" type="text" name="interest" placeholder="Intrests"value={user.interest}  onChange={handleInputs}/>
                                </div>
                                <div className="inputs4">
                                    <i className="fas fa-key fa-2x"></i>
                                    <input  className="form-control mb-3" type="number" name="password" placeholder="Password"value={user.password}  onChange={handleInputs}/>
                                </div>
                                <div className="inputs5">
                                <i className="fas fa-unlock-alt fa-2x"></i>
                                    <input  className="form-control mb-3" type="number" name="cpassword" placeholder="Confirm Password "value={user.cpassword} onChange={handleInputs} />
                                </div>
                                {/* buttons */}
                                <div className="btns_grp">
                                    <div className="Signup_btn">
                                        <button type="button" onClick={postData} className="btn btn-primary mx-2 fw-bold px-4">Sign up</button>
                                    </div>
                                    <div className="_btn">
                                      <Link to="/login"> <button  type="button" className="btn btn-success text-white fw-bold px-4">Sign In</button></Link> 
                                    </div>
                    </div>
                                        {/* button ends */}
                        </div>
                        <div className="right mt-5">
                            <div className="heading2 mt-5"> 
                            </div>
                            <div className="image_div">
                                <img className="m-0 img-fluid" src={image} width="320px" />
                            </div>
                        </div>
                        
                    </div>
                    <hr />
            

                </form>
    )
}

export default Signup
