import { useState } from "react"

export default function ProjectTab({ProjectContent, ProjectTitle, ProjectImage, ProjectLink, ProjectToggleFunc, ProjectToggled, ProjectDate, Id}){
    const [ProjectTabStyle, SetProjectTabStyle] = useState({
        gridColumn: "span 1",
        gridRow: "span 1",
        height: "200px"
    })

    const toggled = ProjectToggled.get(Id)

    if(toggled && (ProjectTabStyle.gridColumn!=="span 2")){
        SetProjectTabStyle(x => {
            return {
                gridColumn: "span 2",
                gridRow: "span 2",
                height: "400px"
            }
        })
    }else if(!toggled && (ProjectTabStyle.gridColumn!=="span 1")){
        SetProjectTabStyle(x => {
            return {
                gridColumn: "span 1",
                gridRow: "span 1",
                height: "200px"
            }
        })
    }
    
    return (
        <button className="ProjectTab-Button" onClick={()=>{ProjectToggleFunc(Id)}} style={ProjectTabStyle}>
            <div className="ProjectTab" style={{backgroundImage: !toggled ? ProjectImage : ""}}>
               {toggled ? (<div>

               </div>):(<h2 className="ProjecTab-Subtitle">{ProjectTitle}</h2>)}
            </div>
        </button>
    )
}