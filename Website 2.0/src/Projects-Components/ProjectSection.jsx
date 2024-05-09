import './ProjectSection.css'
import Subtitle from '../Public-Components/Subtitle'
import { useEffect, useRef } from 'react'

export default function ProjectSection(){

    return(
        <div className='ProjectSection-Body'>
            <Subtitle SubtitleContent="Projects" UnderlineWidth={40}/>
        </div>
    )
}