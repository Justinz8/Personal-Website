import './SkillsSection.css'
import { useState, useRef, useEffect } from 'react'
import SkillsList_Item from './SkillsList_Item'
import react_icon from '../assets/images/React-icon.png'
import java_icon from '../assets/images/Java-icon.png'
import js_icon from '../assets/images/Js-icon.png'
import html_css_icon from '../assets/images/html-css-icon.png'
import c_icon from '../assets/images/C-icon.png'
import python_icon from '../assets/images/Python-icon.png'


export default function BackgroundSection(){

    const centerMargin = 97 //gotta guess and check to center the cube cuz border (around half of the dim of cube + border thickness)

    const [boxdeg, setboxdeg] = useState({
        x: 0,
        y: 0,
        transx: centerMargin,
        transz: 0
    })

    function setboxdegfunc(curx, cury, curtransx, curtransz){
        setboxdeg({
                x: curx,
                y: cury,
                transx: curtransx,
                transz: curtransz})
    }
    
    const SkillsTitle = useRef(null)

    useEffect(()=>{

        function animationendHandler(){
            SkillsTitle.current.style.width = "40%"
            SkillsTitle.current.removeEventListener("animationend", animationendHandler)
        }

        function CheckInFrame(){
            let distance = SkillsTitle.current.getBoundingClientRect().top - window.innerHeight;
            if(distance<=0){
                SkillsTitle.current.addEventListener("animationend", animationendHandler)
                SkillsTitle.current.classList.add("TitleUnderLine-Animation")
                document.removeEventListener('scroll', CheckInFrame)
            }
            
        }
        
        document.addEventListener('scroll', CheckInFrame)
        return () =>{
            document.removeEventListener('scroll', CheckInFrame)
        }
    }, [])

    return(
        <section className="SkillsSection-Body">
            <div className='SkillsSection-Main'>
                <header className='SkillsSection-Title'>
                    <h2>Skills</h2>
                    <div className='SkillsSection-TitleUnderline' ref={SkillsTitle}/>
                </header>

                <div className='cubeSkills'>
                    <div id="cube-wrapper">
                        <div className="cube" style={{transform: `rotate3d(1, 0, 0, ${boxdeg.x * 90}deg) 
                                                                rotate3d(0, 1, 0, ${boxdeg.y * 90}deg)
                                                                translateX(${boxdeg.transx}px)
                                                                translateZ(${boxdeg.transz}px)`}}>

                            <div id="front_face" className="face">
                                <img src={react_icon} />
                                <h3>React</h3>
                            </div>

                            <div id="right_face" className="face">
                                <img src={java_icon} />
                                <h3>Java</h3>
                            </div>

                            <div id="back_face" className="face">
                                <img src={js_icon} />
                                <h3>Javascript</h3>
                            </div>

                            <div id="left_face" className="face">
                                <img src={html_css_icon} />
                                <h3>HTML/CSS</h3>
                            </div>

                            <div id="top_face" className="face">
                                <img src={c_icon} />
                                <h3>C</h3>
                            </div>

                            <div id="bottom_face" className="face">
                                <img src={python_icon} />
                                <h3>Python</h3>
                            </div>

                        </div>
                    </div>
                    <div className='SkillsList-Container'>
                        <ul className='SkillsList'>
                            <SkillsList_Item MarginFunc={()=>{setboxdegfunc(0, 0, centerMargin, 0)}} SkillTitle="React" BackColor="#33F3FF" SkillContent="psaw aw dw aw wa aw a  dwad awd awd wa ussy" nmb={1} />
                            <SkillsList_Item MarginFunc={()=>{setboxdegfunc(0, -1, 0, -centerMargin)}} SkillTitle="Java" BackColor="#FFFFFF" nmb={2} />
                            <SkillsList_Item MarginFunc={()=>{setboxdegfunc(2, 0, centerMargin, 0)}} SkillTitle="Javascript" BackColor="#FFD600" nmb={3} />
                            <SkillsList_Item MarginFunc={()=>{setboxdegfunc(0, 1, 0, centerMargin)}} SkillTitle="HTML/CSS" BackColor="#FF5C38" nmb={4} />
                            <SkillsList_Item MarginFunc={()=>{setboxdegfunc(-1, 0, centerMargin, 0)}} SkillTitle="C" BackColor="#5A75FF" nmb={5} />
                            <SkillsList_Item MarginFunc={()=>{setboxdegfunc(1, 0, centerMargin, 0)}} SkillTitle="Python" BackColor="#9AFF35" nmb={6} />
                            <div className='SkillsList_Bar'/>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}