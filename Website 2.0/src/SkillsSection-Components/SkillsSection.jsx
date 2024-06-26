import './SkillsSection.css'
import { useState, forwardRef } from 'react'
import SkillsList_Item from './SkillsList_Item'
import Subtitle from '../Public-Components/Subtitle'

import react_icon from '../assets/images/React-icon.png'
import java_icon from '../assets/images/Java-icon.png'
import js_icon from '../assets/images/Js-icon.png'
import html_css_icon from '../assets/images/html-css-icon.png'
import c_icon from '../assets/images/C-icon.png'
import python_icon from '../assets/images/Python-icon.png'


export default forwardRef(function BackgroundSection(props, ref){

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

    return(
        <div className="Skills-BackBody BackBody" ref={ref}>
            <section className="SkillsSection-Body">
                    <header className='SkillsSection-Title'>
                        <Subtitle SubtitleContent="Skills" UnderlineWidth={40}/>
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
                                <SkillsList_Item MarginFunc={()=>{setboxdegfunc(0, 0, centerMargin, 0)}} SkillTitle="React" BackColor="#33F3FF" SkillContent="Proficient with React and its features with this website as proof" nmb={1} />
                                <SkillsList_Item MarginFunc={()=>{setboxdegfunc(0, -1, 0, -centerMargin)}} SkillTitle="Java" BackColor="#FFFFFF" SkillContent="Built out plenty of small projects with Java establishing a thorough understanding of OOP" nmb={2} />
                                <SkillsList_Item MarginFunc={()=>{setboxdegfunc(2, 0, centerMargin, 0)}} SkillTitle="Javascript" BackColor="#FFD600" nmb={3} SkillContent="Built out multiple dynamic websites that used both frameworks such as React and vanilla Javascript"/>
                                <SkillsList_Item MarginFunc={()=>{setboxdegfunc(0, 1, 0, centerMargin)}} SkillTitle="HTML/CSS" BackColor="#FF5C38" SkillContent="Built out multiple websites having a thorough understanding of how HTML/CSS works as well as its best practices" nmb={4} />
                                <SkillsList_Item MarginFunc={()=>{setboxdegfunc(-1, 0, centerMargin, 0)}} SkillTitle="C" BackColor="#5A75FF" SkillContent="Have a good understanding as to how C handles memory and how to manipulate that memory to build programs" nmb={5} />
                                <SkillsList_Item MarginFunc={()=>{setboxdegfunc(1, 0, centerMargin, 0)}} SkillTitle="Python" BackColor="#9AFF35" SkillContent="Created many python programs that utilised the conciseness python code" nmb={6} />
                                <div className='SkillsList_Bar'/>
                            </ul>
                        </div>
                    </div>
            </section>
        </div>
    )
})