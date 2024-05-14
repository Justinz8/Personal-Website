import { useState } from "react"

export default function ProjectTab({ProjectContent, ProjectTitle, ProjectImage, ProjectLink, ProjectToggleFunc, ProjectToggled, ProjectDate, ProjectLearningObjective, Id}){

    const untriggeredCol = "span 1"
    const untriggeredRow = "span 1"
    const triggeredCol = window.innerWidth>1000 ? "span 2" : "span 1"
    const triggeredRow = "span 2"
    const untriggeredHeight = "200px"
    const triggeredHeight = window.innerWidth>1000 ? "400px" : "fit-content"

    const [ProjectTabStyle, SetProjectTabStyle] = useState({
        gridColumn: untriggeredCol,
        gridRow: untriggeredRow,
        height: untriggeredHeight
    })

    const toggled = ProjectToggled.get(Id)

    if(toggled && (ProjectTabStyle.gridColumn!==triggeredCol || ProjectTabStyle.gridRow!==triggeredRow || ProjectTabStyle.height!==triggeredHeight)){
        SetProjectTabStyle(x => {
            return {
                gridColumn: triggeredCol,
                gridRow: triggeredRow,
                height: triggeredHeight
            }
        })
    }else if(!toggled && (ProjectTabStyle.gridColumn!==untriggeredCol || ProjectTabStyle.height!==untriggeredHeight)){
        SetProjectTabStyle(x => {
            return {
                gridColumn: untriggeredCol,
                gridRow: untriggeredRow,
                height: untriggeredHeight
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
                        <div className="Project-Thumbnail" style={{backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%), url(${ProjectImage})`}}/>
                        <h2 className="ProjecTab-Subtitle">{ProjectTitle}</h2>
                    </>)}
                </div>
            </button>
        </>
    )
}