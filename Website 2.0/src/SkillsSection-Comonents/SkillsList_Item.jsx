import { useState } from "react"

export default function Item(props){
    const { MarginFunc, SkillTitle, BackColor, SkillContent } = props

    const [hovered, SetHovered] = useState(false)

    return (
        <li onPointerOver={MarginFunc} onFocus={()=>{MarginFunc}} className='SkillsList-Element'>
            <div className="ListStyleElement" style={{color: BackColor}}><h3>{props.nmb}</h3></div>
            <button style={{backgroundColor:BackColor}} onMouseOver={()=>SetHovered(true)} onMouseLeave={()=>SetHovered(false)}>
                <h3 className="SkillsList-Title">{SkillTitle}</h3>
                {hovered && <p>{SkillContent}</p>}
            </button>
        </li>
    )
}   