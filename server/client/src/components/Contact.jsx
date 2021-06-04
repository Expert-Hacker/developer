import React from 'react'
import '../App.css'
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
function Contact() {
    return (
                <div className="contact_us_out_div">
                        <div className="contact_inn_div shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="d-flex justify-content-between mt-5">
                                <div className="first shadow-lg p-3 mb-5 bg-info rounded mt-2">
                                    <h5  className="text-dark text-center ">Phone: +91 8971561491</h5>
                                </div>
                                <div className="first shadow-lg p-3 mb-5 bg-info rounded mt-2">
                                    <h5 className=" text-center ">Email: keerthanachar95@gmail.com</h5>
                                </div>
                                <div className="first shadow-lg p-3 mb-5 bg-info rounded mt-2">
                                    <h5 className=" text-center ">Whatsapp: +91 6361027573</h5>
                                </div>
                               
                            </div>
                            {/* second row */}
                            <div className="row mb-0 mx-1">
                                <div className="second col-12 text-center shadow-lg p-3 mb-5 bg-info  rounded">
                                    <p>Hello, am <span className='fw-bold'>Mr. Keerthan</span>, Owner of this website My name is Keerthan, I am the owner of this website.In this site where Im going to share Full Web Development Cources ,Ethical hacking, Cybersecurity, Technology information, Scripting tutorials, Self-security, Facebook and other social media tricks, and much more. From this site, you will gain more knowledge about cool tricks, techniques without any charges.</p>
                                </div>
                                
                                <div className="social">
                                   <div className="heading4 text-center">
                                       <h5>My Social Networks</h5>
                                   </div>
                                   <div className="d-flex justify-content-center">
                                        <img className="p-2" src={insta} height="40px" alt="" />
                                        <img className="p-2" src={facebook} height="40px" alt="" />
                                        <img className="p-2" src={twitter} height="40px" alt="" />
                                        <img className="p-2" src={youtube} height="40px" alt="" />
                                        <img className="p-2" src={linkedin} height="40px" alt="" />
                                   </div>
                            
                                </div>
                            </div>
                        </div>
                </div>
  
    )
}

export default Contact
