import { useState } from "react"

export default function ProjectTab({ProjectContent, ProjectTitle, ProjectImage, ProjectLink, ProjectToggleFunc, ProjectToggled, ProjectDate, ProjectLearningObjective, Id}){
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
        <>
            <style>
                {toggled ? "" : `.ProjectTab-ButtonID${Id.replaceAll(":", '')}{cursor: pointer}`}
            </style>
            <button className={`ProjectTab-Button ProjectTab-ButtonID${Id.replaceAll(":", '')}`} onClick={()=>{ProjectToggleFunc(Id)}} style={ProjectTabStyle}>
                <div className="ProjectTab">
                    {toggled ? (
                    <div className="ProjectTab-ContentSection">
                            <div className="ProjectTab-Content">
                                <h3>{ProjectTitle}</h3>
                                <p>{ProjectContent}</p>
                                <p>{ProjectLearningObjective}</p>
                                <p>{ProjectDate}</p>
                                <p><a href={ProjectLink}>GitHub</a></p>
                            </div>
                            <img src={ProjectImage} className="ProjectTab-Image" />
                    </div>):(<>
                        <div className="Project-Thumbnail" style={{backgroundImage: `url(${ProjectImage})`}}/>
                        <h2 className="ProjecTab-Subtitle">{ProjectTitle}</h2>
                    </>)}
                </div>
            </button>
        </>
    )
}