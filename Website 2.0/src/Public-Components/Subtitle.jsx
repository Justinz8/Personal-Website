import { useEffect, useRef, useState, useId } from 'react'
import React from 'react'

import "./Subtitle.css"

export default function Subtitle(props){
    const SkillsTitle = useRef(null)

    const keyframeId = useId().replaceAll(":", "")

    const [animAdjustedWidth, SetAnimAdjustedWidth] = useState(window.innerWidth >750 ? props.UnderlineWidth : 100) //animation width based off screen size

    const [UnderlineStyle, SetUnderlineStyle] = useState({
        width: 0
    })

    const [UnderlineFinished, SetUnderlineFinished] = useState(false) //tracks if underline animation is finished or not

    useEffect(()=>{
        //update adjustedwidth whenever screen gets resized
        function AdjustWidth(){
            SetUnderlineStyle({
                ...UnderlineStyle,
                width: `${!UnderlineFinished?0:(window.innerWidth >750 ? props.UnderlineWidth : 100)}%`
            })
        }
        window.addEventListener('resize', AdjustWidth)
        return ()=>{
            window.removeEventListener("resize", AdjustWidth)
        }
    },[UnderlineFinished])

    useEffect(()=>{
        function AnimAdjustWidth(){//update the width(how long the underline will be in the animation) based on the screen size
            SetAnimAdjustedWidth(window.innerWidth >750 ? props.UnderlineWidth : 100)
        }
        window.addEventListener('resize', AnimAdjustWidth)

        //Line animation when scrolled to

        //When animation ends mark animation as finished and cleanup
        function animationendHandler(){
            SetUnderlineFinished(true)
            SetUnderlineStyle({
                ...UnderlineStyle,
                width: `${window.innerWidth >750 ? props.UnderlineWidth : 100}%`
            })
            SkillsTitle.current.removeEventListener("animationend", animationendHandler)
        }

        //Checks if underline is inframe
        function CheckInFrame(){
            let distance = SkillsTitle.current.getBoundingClientRect().top - window.innerHeight; //how far away the scroll is from the underline

            if(distance<=0){//if scrolled to/scrolled past underline start playing animation
                SkillsTitle.current.addEventListener("animationend", animationendHandler)//cleanup/set actual width once animation is done

                SetUnderlineStyle(x=>{
                    return {
                        ...x,
                        animation: `underlinekey-${keyframeId} 0.4s`,
                        animationDelay: `0.5s`
                    }
                })

                //cleanup
                document.removeEventListener('scroll', CheckInFrame)
                window.removeEventListener("resize", AnimAdjustWidth)
            }
        }
        
        document.addEventListener('scroll', CheckInFrame)
        return () =>{
            window.removeEventListener("resize", AnimAdjustWidth)
            document.removeEventListener('scroll', CheckInFrame)
        }
    }, [])

    return (
        <>
            <style>{/*animation individual to each seperate instance of Subtitle using useId hook.*/}
                {`@keyframes underlinekey-${keyframeId} {
                    from {width:0%; background-color:#ffcd80;}
                    to {width:${animAdjustedWidth}%; background-color:#ff8a00;}
                }`}
            </style>
            
            <h2 className='Subtitle-Content'>{props.SubtitleContent}</h2>
            <div className="Subtitle-Underline" style={UnderlineStyle} ref={SkillsTitle}/>
        </>
    )
}