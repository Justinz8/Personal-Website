import './Navbar.css'
import { useState } from 'react'

export default function Navbar({goToSectionFunc}){

    const [NavBarActive, SetNavBarActive] = useState(false)
    function toggleNavBar(){
        SetNavBarActive(x => !x)
    }

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
                </ul>
            </div>
            <div className='Burger-Wrapper'>
                <button onClick={toggleNavBar}>
                    <div className="Burger"></div>  
                </button>
            </div>
            
        </div>
    )
}