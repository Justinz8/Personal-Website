import { useEffect, useRef, useState, useId } from 'react'
import React from 'react'

import "./Subtitle.css"

export default function Subtitle(props){
    const SkillsTitle = useRef(null)

    const keyframeId = useId().replaceAll(":", "")

    const [UnderlineStyle, SetUnderlineStyle] = useState({
        width: 0
    })

    const [UnderlineFinished, SetUnderlineFinished] = useState(false)

    useEffect(()=>{

        function animationendHandler(){
            SetUnderlineFinished(true)
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

    function currentUnderlineWidth(){
        let cur = {...UnderlineStyle}
        if(UnderlineFinished){
            cur.width=`${window.innerWidth >750 ? props.UnderlineWidth : 100}%`
            cur.transition="1s"
        }

        return cur
    }

    return (
        <>
            <style>
                {`
                @keyframes underlinekey-${keyframeId} {
                    from {width:0%; background-color:#ffcd80;}
                    to {width:${window.innerWidth >750 ? props.UnderlineWidth : 100}%; background-color:#ff8a00;}
                }
                `}
            </style>
            
            <h2 className='Subtitle-Content'>{props.SubtitleContent}</h2>
            <div className="Subtitle-Underline" style={currentUnderlineWidth()} ref={SkillsTitle}/>
        </>
    )
}