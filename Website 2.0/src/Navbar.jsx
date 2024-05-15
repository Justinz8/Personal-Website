import './Navbar.css'
import { useState, useEffect } from 'react'

export default function Navbar({goToSectionFunc}){

    const [NavBarActive, SetNavBarActive] = useState(true)
    function toggleNavBar(){
        SetNavBarActive(x => !x)
    }

    const [widthMode, SetWidthMode] = useState(window.innerWidth > 530) //false when small screen, true when large screen
    useEffect(()=>{
        function setWidthModeWrapper(){
            SetWidthMode(window.innerWidth > 530)
        }
        window.addEventListener("resize", setWidthModeWrapper)
        return ()=>{
            window.removeEventListener("resize", setWidthModeWrapper)
        }
    }, [])

    return (
        <div className="navBar-Header">
            <div className='NavBar-Wrapper'>
                <ul className={`NavBar-Links ${NavBarActive?"NavBar-Links-activated":""}`}>
                    <li>
                        <button onClick={()=>{goToSectionFunc("AboutMe")}}>
                            <p>
                                About Me
                            </p>
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{goToSectionFunc("Skills")}}>
                            <p>
                                Skills
                            </p>
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{goToSectionFunc("Projects")}}>
                            <p>
                                Projects
                            </p>
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{goToSectionFunc("Contacts")}}>
                            <p>
                                Contacts
                            </p>
                        </button>
                    </li>
                    <li>
                        <a onClick={()=>{goToSectionFunc("Resume")}}>
                            <p>
                                Resume
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            {widthMode && (<div className='Burger-Wrapper'>
                                <button onClick={toggleNavBar}>
                                    <div className="Burger"></div>  
                                </button>
                            </div>)}
        </div>
    )
}