import React from "react";
import './Resume.css';
import {BiPhoneCall, BiCookie} from "react-icons/bi";
import {AiOutlineMail, AiFillRead} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md";
import {FaGamepad} from "react-icons/fa";
import {FcAdvertising} from "react-icons/fc";


const Resume = () => {

    return (
      <>
        <div className="container">
            <div className="left_side">
                <div className="profileText">
                    <div className="imgBx">
                        <img src={require('./chinna.jpeg')} />                        
                    </div>
                    <h2>Chinna Dasari<br /><span>Web developer</span></h2>
                </div>
                <div className="contactInfo">
                    <h3 class="title">contactInfo</h3>
                    <ul>
                        <li>
                            <span className="icon"><BiPhoneCall /></span>
                            <span className="text">+91 6300911931</span>
                        </li>
                        <li>
                            <span className="icon"><AiOutlineMail /></span>
                            <span className="text">dasarichinna@gmail.com</span>
                        </li>
                        <li>
                            <span className="icon"><MdLocationOn /></span>
                            <span className="text">Sri Ramapuram, Narsaraopet, Guntur District PIN: 522601</span>
                        </li>
                    </ul>
                 </div>
                 <div className="contactInfo education">
                    <h3 className="title">Education</h3>
                    <ul>
                        <li>
                            <h5>2015 - 2017</h5>
                            <h4>Masters Degree in Electronics</h4>
                            <h4>Gitams University</h4>
                        </li>
                        <li>
                            <h5>2010 - 2013</h5>
                            <h4>Belchar Degree in Electronics</h4>
                            <h4>Gitams University</h4>
                        </li>
                        <li>
                            <h5>2008 - 2010</h5>
                            <h4>intermediate</h4>
                            <h4>Gitams University</h4>
                        </li>
                    </ul>
                 </div>
                 <div className="contactInfo language">
                    <h3 className="title">Language</h3>
                    <ul>
                        <li><span className="text">English</span></li>
                        <span className="percent"><div style={{width:"80%"}}></div></span>
                        <li><span className="text">Hindi</span></li>
                        <span className="percent"><div style={{width:"70%"}}></div></span>
                        <li><span className="text">Telugu</span></li>
                        <span className="percent"><div style={{width:"90%"}}></div></span>
                    </ul>
                </div>
    
            </div>
            
            <div className="right_side">
                <div className="aboout">
                    <h2 className="title2">profile</h2>
                    <p>Seeking a challenge and rewarding opportunity in an organization of repute which recognises and utilises my true potential while nurturing my technical skills.</p>
                </div>
                <div className="about">
                    <h2 className="title2">Experence</h2>
                    <div className="box">
                        <div className="year_company">
                            <h5>2022 - till Now</h5>
                            <h5>Tata Consultancy Service</h5>
                        </div>
                        <div className="text">
                            <h4>System Engineer</h4>
                            <p>Some Infromation Related to project</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2020 - 2022</h5>
                            <h5>ClobData Technologies</h5>
                        </div>
                        <div className="text">
                            <h4>System Engineer</h4>
                            <p>Some Infromation Related to project</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2022 - till Now</h5>
                            <h5>Tata Consultancy Service</h5>
                        </div>
                        <div className="text">
                            <h4>System Engineer</h4>
                            <p>Some Infromation Related to project</p>
                        </div>
                    </div>
                </div>

                {/* Professional Skills                     */}
                <div className="about skills">
                    <h2 className="title2">Professional Skills</h2>
                    <div className="box">
                        <h4>Html</h4>
                        <div className="percent1">
                            <div style={{width:"95%"}}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>CSS</h4>
                        <div className="percent1"><div style={{width:"80%"}}></div></div>
                    </div>
                    <div className="box">
                        <h4>JavaSceript</h4>
                        <div className="percent1"><div style={{width:"80%"}}></div></div>                       
                    </div>
                    <div className="box">
                        <h4>BootStrap</h4>
                        <div className="percent1"><div style={{width:"80%"}}></div></div>                        
                    </div>
                    <div className="box">
                        <h4>React</h4>
                        <div className="percent1"><div style={{width:"80%"}}></div></div>                        
                    </div>
                </div>


                <div className="about interest">
                    <h2 className="title2">Interest</h2>
                    <ul>
                        <li><icon className="icon1"><FaGamepad /></icon><span>Gameing</span></li>
                        <li><icon className="icon1"><FcAdvertising /></icon><span>Singing</span></li>
                        <li><icon className="icon1"><AiFillRead /></icon><span>Reading</span></li>
                        <li><icon className="icon1"><BiCookie /></icon><span>Cooking</span></li>
                    </ul>
                </div>
            </div>
        </div>
        

      </>  
    )
}

export default Resume