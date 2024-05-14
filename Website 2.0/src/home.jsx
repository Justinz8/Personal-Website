import HomeMainTitle from "./MainTitle-Components/HomeMainTitle.jsx"
import SkillsSection from "./SkillsSection-Components/SkillsSection.jsx"
import AboutMeSection from "./AboutMe-Components/AboutMe.jsx"
import ProjectSection from "./Projects-Components/ProjectSection.jsx"
import ContactsSection from "./ContactsSection-Components/ContactsSection.jsx"
import './home.css'
import { useEffect, useState } from "react"
import Chill from './assets/images/Chill.jpg'

export default function Home({SectionObjects}){

    // values to change dynamic gradient background

    //RGB values for gradient background
    const targetRGB1 = {
        red: 244,
        green: 183,
        blue: 56
    }
    const targetRGB2 = {
        red: 255,
        green: 252,
        blue: 201
    }
    const backgroundCycle = 2000; //how long a background cycle is based on the number of pixels scrolled

    const [backgroundStyle, SetBackgroundStyle] = useState({
        backgroundImage: `linear-gradient(116.82deg, rgba(${targetRGB1.red}, ${targetRGB1.green}, ${targetRGB1.blue}, 0.65) 0%, 
                                     rgba(${targetRGB1.red}, ${targetRGB1.green}, ${targetRGB1.blue}, 0.65) 20.5%, 
                                     rgba(${targetRGB2.red}, ${targetRGB2.green}, ${targetRGB2.blue}, 0.65) 100%), url(${Chill})`,
        backgroundPosition: "center 0%"
    })

    useEffect(()=>{
        //helper struct that just gets the difference of rgb values
        const difference = {
            red: targetRGB1.red - targetRGB2.red,
            green: targetRGB1.green - targetRGB2.green,
            blue: targetRGB1.blue - targetRGB2.blue
        }

        function calculateBackground(){
            //get which part of the cycle we are on in %
            let scrollDepth = ((window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop)%backgroundCycle)
            var body = document.body,
                html = document.documentElement;

            var height = Math.max( body.scrollHeight, body.offsetHeight, 
                                html.clientHeight, html.scrollHeight, html.offsetHeight );
            let scrollPercent = (((window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop))/height)*100

            if(scrollDepth>=backgroundCycle/2) scrollDepth = backgroundCycle/2-(scrollDepth-backgroundCycle/2) //check if cycle needs to be in reverse

            scrollDepth = scrollDepth/(backgroundCycle/2)

            //calcualte RGB values based on how far along the cycle is in %
            let firstRGB = {
                red: targetRGB2.red + difference.red - scrollDepth * difference.red,
                green: targetRGB2.green + difference.green - scrollDepth * difference.green,
                blue: targetRGB2.blue + difference.blue - scrollDepth * difference.blue
             } 

            let secondRGB = {
                red: targetRGB2.red + scrollDepth * difference.red,
                green: targetRGB2.green + scrollDepth * difference.green,
                blue: targetRGB2.blue + scrollDepth * difference.blue
            }

            //update with new RGB values
            SetBackgroundStyle({
                backgroundImage: `linear-gradient(116.82deg, rgba(${firstRGB.red}, ${firstRGB.green}, ${firstRGB.blue}, 0.65) 0%,
                             rgba(${firstRGB.red}, ${firstRGB.green}, ${firstRGB.blue}, 0.65) 20.5%,
                             rgba(${secondRGB.red}, ${secondRGB.green}, ${secondRGB.blue}, 0.65) 100%), url(${Chill})`,
                backgroundPosition: `50% ${scrollPercent}%`
            })
        }

        document.addEventListener('scroll', calculateBackground)
        
        return ()=>{
            document.removeEventListener('scroll', calculateBackground)
        }
    }, [])

    return (
        <div className="Main-Body">
            <div className="customBackground" style={backgroundStyle}></div>
            <HomeMainTitle />
            <AboutMeSection ref={SectionObjects.get("AboutMe")}/>
            <SkillsSection ref={SectionObjects.get("Skills")}/>
            <ProjectSection ref={SectionObjects.get("Projects")}/>
            <ContactsSection ref={SectionObjects.get("Contacts")}/>
        </div>
    )
}