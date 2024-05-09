import "./AboutMe.css"
import { useRef, useEffect } from "react"
import Subtitle from "../Public-Components/Subtitle"

export default function AboutMeSection(){

    return (
        <div className="AboutMe-Body">
            <div className="AboutMe-Content">
                <header className="AboutMe-Head">
                    <Subtitle SubtitleContent="About Me" UnderlineWidth={30}/>
                </header>
                <p>
                    I graduated from high school with an IB diploma in Ontario and am on course to graduate with a 
                    Computer Science co-op degree from the University of Toronto Scarborough campus by 2027. My hobbies 
                    include going to the gym and occasionally enjoying learning and participating in competitive programming 
                    on the website <a href="https://dmoj.ca/">DMOJ</a>. I have a particular interest in the more complex concepts of competitive programming, 
                    such as dynamic programming, applications of geometry, like the Convex Hull Trick, and other miscellaneous techniques such
                    as DFS trees or centroid decomposiiton. While I've been relatively inactive lately, you can still check out my account on DMOJ: <a href="https://dmoj.ca/user/JustinZ3">Justinz3</a>.
                    Currently, I've been focusing on school as well as growing my skillset by building projects such as this website. Please feel free to 
                    contact me if you have any inquiries through any of the buttons below.
                </p>
                <div className="Buttons-Wrapper">
                    <a href="https://www.linkedin.com/in/justin-zhang-26b63b280/"><button className="AboutMe-Button"><p>LinkedIn</p></button></a>
                    <a href="mailto:justinzhang9001@gmail.com"><button className="AboutMe-Button"><p>Email</p></button></a>
                </div>
            </div>
            <img className="AboutMe-Image"></img>
        </div>
    )
}