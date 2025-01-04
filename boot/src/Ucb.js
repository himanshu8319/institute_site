import React, { useState } from "react";
import './Ucb.css';
import logo from "./images/logo.jpeg";
import img from "./images/img.jpg"
import s1 from "./images/s1.png"
import s2 from "./images/s2.png"
import s3 from "./images/s3.png"
import s4 from "./images/s4.png"
import cor from "./images/cor.png"
import certi from "./images/certi.png"
import cor1 from "./images/cor1.png"
import about from './images/about.png'





function Ucb(){
    const[name, setName] = useState("")
    const[lastname, setLastName] = useState("")
    const[mail, setMail] = useState("")
    const[textarea, setTextarea] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your Feedback is Successfully Submited`)
    }
    
    return(
        <div>
            <div >
                <img className='logo' src={logo}/>
        <div className="nav">
            <div className="button">
        <button class="btn btn-outline-secondary">SIGN UP</button>
        <button class='btn btn-success'>LOG IN</button>
        </div>
        <ul>
            <li><a class="active" href="#home">HOME</a></li>
            <li><a href="#news">NEWS</a></li>
            <li><a  href="#contact">CONTACT US</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#courses">COURSES</a></li>
        </ul>
        </div>

            <img className="img" src={img} alt="img"/>
            </div>

            <div className="s">
                <img src={s1}/>
                <img src={s2}/>
                <img src={s3}/>
                <img src={s4}/>
            </div>

            <div className="courses">
                <h1 className="head">Our Courses</h1>
                <img src={cor}/>
        <ol>
            <li>Full Stack Web Developmet Program</li>
            <li>Prfessional Graphic designing And Video Editig</li>
            <li>2D 3D Animation And VFX SFX</li>
            <li>Professional Tally Accountant</li>
            <li>UI/UX Designing With Figma</li>
            <li>Data Science, Robotics, AI</li>
             <li>Professional Digital Marketing</li>

             <img className="cor" src={cor1}/>
        </ol>
            </div>

            <div>
                <h1 className="head">About Us</h1>

                <img src={about}/>

                <div className="about">
                    <h1>Welcome to Universal <br/> CodeBox!</h1>
                    <p>Universal CodeBox, founded in 2022, is on a mission to revolutionize the <br/>
                     landscape of the Information Technology (IT) sector by providing comprehensive <br/>
                      upskilling solutions. With a core focus on empowering the AI generation,<br/>
                       SharpSkilled offers a diverse array of courses meticulously crafted to cater <br/>
                        to the evolving demands of the IT industry.</p>

                </div>
            </div>

            <div>
                <img className="cert" src={certi}/>    
            </div>

            <form onSubmit={handleSubmit}>
                <center>
        <fieldset>
            <legend><b><u>Feedback</u></b></legend>
            <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}/>

            <input
            type="text"
            value={lastname}
            placeholder="Your Last Name"
            onChange={(e) => setLastName(e.target.value)}/><br/><br/>

            <input
            type="mail"
            value={mail}
            placeholder="E-mail"
            onChange={(e) => setMail(e.target.value)}/><br/><br/>

            <textarea className="ta"
            value={textarea}
            placeholder="Write your Feedback......"
            onChange={(e) => setTextarea(e.target.value)}/>

        </fieldset>

        <button class='btn btn-primary'>Submit</button>
        </center>
        </form>

        </div>

        
    )
}
export default Ucb;