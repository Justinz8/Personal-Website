import { useEffect, useRef, useState, useId } from 'react'
import React from 'react'

export default function Subtitle(props){
    const SkillsTitle = useRef(null)

    const keyframeId = useId().replaceAll(":", "")

    const [UnderlineStyle, SetUnderlineStyle] = useState({
        width: 0,
        height: "7px",
        backgroundColor: "#ff8a00"
    })

    useEffect(()=>{

        function animationendHandler(){
            SetUnderlineStyle(x=>{
                return {
                    ...x,
                    width: `${props.UnderlineWidth}%`
                }
            })
            SkillsTitle.current.removeEventListener("animationend", animationendHandler)
        }

        function CheckInFrame(){
            let distance = SkillsTitle.current.getBoundingClientRect().top - window.innerHeight;
            if(distance<=0){
                SkillsTitle.current.addEventListener("animationend", animationendHandler)
                SetUnderlineStyle(x=>{
                    return {
                        ...x,
                        animation: `underlinekey-${keyframeId} 0.4s`,
                        animationDelay: `0.5s`
                    }
                })
                document.removeEventListener('scroll', CheckInFrame)
            }
        }
        
        document.addEventListener('scroll', CheckInFrame)
        return () =>{
            document.removeEventListener('scroll', CheckInFrame)
        }
    }, [])

    return (
        <>
            <style>
                {`
                @keyframes underlinekey-${keyframeId} {
                    from {width:0%; background-color:#ffcd80;}
                    to {width:${props.UnderlineWidth}%; background-color:#ff8a00;}
                }
                `}
            </style>
            
            <h2>{props.SubtitleContent}</h2>
            <div style={UnderlineStyle} ref={SkillsTitle}/>
        </>
    )
}