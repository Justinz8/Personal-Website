import './ProjectSection.css'
import Subtitle from '../Public-Components/Subtitle'
import { useState, useId, forwardRef } from 'react'
import ProjectTab from './ProjectTab'
import ProjectDetails from './ProjectDetails'

export default forwardRef(function ProjectSection(props, ref){

    const backbodyWidth = window.innerWidth > 1000 ? 100 : 60

    const [PWrapperToggle, SetPWrapperToggle] = useState(true)
    const [TogglePButton, SetTogglePButton] = useState(false)

    const ProjectSectionId = useId()
    

    const DefaultProjectToggled = new Map();
    ProjectDetails.forEach(x => {
        DefaultProjectToggled.set(`${x.id}-${ProjectSectionId}`, false)
    })

    const [ProjectToggled, SetProjectToggles] = useState(DefaultProjectToggled)

    function setProjectToggle(ProjectId){
        SetProjectToggles(x => {
            let newProjectToggled = new Map(x)
            newProjectToggled.forEach((value, key) => {
                newProjectToggled.set(key, false)
            })
            newProjectToggled.set(ProjectId, true)
            return newProjectToggled
        })
    }
    const Projects = ProjectDetails.map(x => <ProjectTab ProjectContent={x.content} 
                                                         ProjectTitle={x.title}
                                                         ProjectImage={x.image} 
                                                         ProjectDate={x.date} 
                                                         ProjectLink={x.github}
                                                         ProjectLearningObjective = {x.learningObjective} 
                                                         Id = {`${x.id}-${ProjectSectionId}`} 
                                                         ProjectToggleFunc = {setProjectToggle}
                                                         ProjectToggled = {new Map(ProjectToggled)}
                                                         key={`${x.id}-${ProjectSectionId}`}/>)

    function wrapperToggle(){
        SetProjectToggles(x => {
            let newProjectToggled = new Map(x)
            newProjectToggled.forEach((value, key) => {
                newProjectToggled.set(key, false)
            })
        })
        SetPWrapperToggle(x=>!x)
    }

    const ProjectWrapper = (
            <div className='ProjectSection-ProjectWrapper' style={PWrapperToggle ? {maxHeight: '100vh', transition: "1s", overflow: "auto", backgroundColor: "#ffc56b"}: {}} 
            onTransitionEnd={()=>{SetTogglePButton(!PWrapperToggle)}}>
                {PWrapperToggle ? (
                    <button className='PWrapper-XButton' onClick={wrapperToggle}>
                        <div className='PWrapper-X'/>
                    </button>):(
                    <div className='Arrow-Wrapper'>
                        <div className='PWrapper-Arrow' />
                    </div>
                )}
                <div className='ProjectSection-InnerWrapper' style={PWrapperToggle ? {backgroundColor: "#fcf8a2"}: {}}>
                    {Projects}
                </div>
            </div>)

    return(
        <div ref={ref}>
            <div className='BackBody Projects-BackBody'>
                <header className='ProjectSection-Head'>
                    <Subtitle SubtitleContent="Projects" UnderlineWidth={40}/>
                </header>
            </div>
            <div className='Projects-BackBody BackBody' style={PWrapperToggle ? {paddingLeft: 0, 
                                                                                 paddingRight: 0, 
                                                                                 width: `calc(60% + ${backbodyWidth*2}px)`, 
                                                                                 maxWidth: `calc(60% + ${backbodyWidth*2}px)`, 
                                                                                 minWidth: `calc(60% + ${backbodyWidth*2}px)`}: {}}>
                <div className='ProjectSection-Body'>
                    <style>
                        {
                            `.PWrapper-Button:hover{
                                ${
                                    !PWrapperToggle ? "cursor: pointer;": ""
                                }
                            }`
                        }
                    </style>
                    {TogglePButton ? (
                        <button className='PWrapper-Button' onClick={!PWrapperToggle ? wrapperToggle : ()=>{}}>
                            {ProjectWrapper}
                        </button>
                    ):(ProjectWrapper)}
                </div>
            </div>
        </div>
    )
})