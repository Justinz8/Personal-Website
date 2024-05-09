import HomeMainTitle from "./MainTitle-Components/HomeMainTitle.jsx"
import SkillsSection from "./SkillsSection-Components/SkillsSection.jsx"
import AboutMeSection from "./AboutMe-Components/AboutMe.jsx"
import ProjectSection from "./Projects-Components/ProjectSection.jsx"
import './home.css'
import { useEffect, useState } from "react"
import Chill from './assets/images/Chill.jpg'

export default function Home(){

    // values to change dynamic gradient background

    //RGB values for gradient background
    const targetRGB1 = {
        red: 255,
        green: 199,
        blue: 56
    }
    const targetRGB2 = {
        red: 251,
        green: 255,
        blue: 67
    }
    const backgroundCycle = 2000; //how long a background cycle is based on the number of pixels scrolled

    const [backgroundStyle, SetBackgroundStyle] = useState({
        backgroundImage: `linear-gradient(116.82deg, rgba(${targetRGB1.red}, ${targetRGB1.green}, ${targetRGB1.blue}, 0.65) 0%, 
                                     rgba(${targetRGB1.red}, ${targetRGB1.green}, ${targetRGB1.blue}, 0.65) 20.5%, 
                                     rgba(${targetRGB2.red}, ${targetRGB2.green}, ${targetRGB2.blue}, 0.65) 100%), url(${Chill})`
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
                             rgba(${secondRGB.red}, ${secondRGB.green}, ${secondRGB.blue}, 0.65) 100%), url(${Chill})`
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
            <AboutMeSection />
            <div className="Skills-Projects-Body">
                <SkillsSection />
                <ProjectSection />
            </div>
        </div>
    )
}