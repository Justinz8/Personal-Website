import './ProjectSection.css'
import Subtitle from '../Public-Components/Subtitle'
import { useState, useId, forwardRef, useEffect, useRef, use } from 'react'
import ProjectTab from './ProjectTab'
import ProjectDetails from './ProjectDetails'

export default forwardRef(function ProjectSection(props, ref){

    const ProjectWrapperStyle = {
        maxHeight: '100vh', 
        transition: "1s", 
        overflow: "auto", 
        backgroundColor: "#ffc56b"
    }

    //handle screen width modes:
    const BackBody = useRef(null)

    const [ToggledBackBodyStyle, SetToggledBackBodyStyle] = useState({paddingLeft: 0, 
                                                                      paddingRight: 0, 
                                                                      width: `calc(60% + ${(window.innerWidth > 1000 ? 100 : 60)*2}px)`, 
                                                                      maxWidth: `calc(60% + ${(window.innerWidth > 1000 ? 100 : 60)*2}px)`, 
                                                                      minWidth: `calc(60% + ${(window.innerWidth > 1000 ? 100 : 60)*2}px)`})

    useEffect(()=>{//add eventlistener to update width of backbody between different screen width modes
        function TogBBStyleWrap(){
            SetToggledBackBodyStyle(x =>{
                return {
                    ...x,
                    width: `calc(60% + ${(window.innerWidth > 1000 ? 100 : 60)*2}px)`, 
                    maxWidth: `calc(60% + ${(window.innerWidth > 1000 ? 100 : 60)*2}px)`, 
                    minWidth: `calc(60% + ${(window.innerWidth > 1000 ? 100 : 60)*2}px)`,
                }
            })
        }

        window.addEventListener("resize",TogBBStyleWrap)
        return ()=>{
            window.removeEventListener("resize",TogBBStyleWrap)
        }
    }, [])


    const ProjectSectionId = useId()
    
    //default value of ProjectToggled
    const DefaultProjectToggled = new Map();
    ProjectDetails.forEach(x => {
        DefaultProjectToggled.set(`${x.id}-${ProjectSectionId}`, false)
    })

    //keeps track of which project tab is toggled
    const [ProjectToggled, SetProjectToggles] = useState(DefaultProjectToggled) 

    //function that sets the project tab with ProjectId as toggled and everything else as untoggled
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

    
    //boolean the tracks if projects section is expanded or not
    const [PWrapperToggle, SetPWrapperToggle] = useState(true)

    //seperate boolean that keeps track when to toggle the button that expands the projects section.
    //Needed because there is a transition when toggling/untoggling the Project wrapper div
    const [TogglePButton, SetTogglePButton] = useState(false)

    //function that toggles projection section to an extended state or not
    function wrapperToggle(){
        //set all project tabs to an untoggled state
        SetProjectToggles(x => {
            let newProjectToggled = new Map(x)
            newProjectToggled.forEach((value, key) => {
                newProjectToggled.set(key, false)
            })
        })
        SetPWrapperToggle(x=>!x)
    }

    const ProjectWrapper = (<div className='ProjectSection-ProjectWrapper'
                                style={PWrapperToggle ? {...ProjectWrapperStyle, overflow: TogglePButton ? "hidden" : "auto"}: {}} 
                                onTransitionEnd={()=>{SetTogglePButton(!PWrapperToggle)}}>{/*toggles button after transition is finished */}
                                
                                {PWrapperToggle ? (
                                    /* minimize project section X button */
                                    <button className='PWrapper-XButton' onClick={wrapperToggle}>
                                        <div className='PWrapper-X'/>
                                    </button>):(
                                    /*arrow that shows in an untoggled project section state*/
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
            <style>
                {`@keyframes ProjectBodyKeyExtend {
                    from {flex-basis: calc(100% - ${(window.innerWidth > 1000 ? 100 : 60)*2}px)}
                    to {flex-basis: 100%}
                }
                @keyframes ProjectBodyKeyRecede {
                    from {flex-basis: calc(100% + ${(window.innerWidth > 1000 ? 100 : 60)*2}px);}
                    to {flex-basis: 100%}
                }
                .PWrapper-Button:hover{
                    ${
                        !PWrapperToggle ? "cursor: pointer;": ""
                    }
                }`}
            </style>
            <div className='BackBody Projects-BackBody'>
                <header className='ProjectSection-Head'>
                    <Subtitle SubtitleContent="Projects" UnderlineWidth={40}/>
                </header>
            </div>
            <div className='Projects-BackBody BackBody MainBackBody' ref={BackBody} style={PWrapperToggle ? ToggledBackBodyStyle: {}} onres>
                <div className='ProjectSection-Body' 
                     style={PWrapperToggle ? {animation: `ProjectBodyKeyExtend 1s`}:{animation: `ProjectBodyKeyRecede 1s`}}>

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