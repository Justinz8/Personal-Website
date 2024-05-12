import "./HomeMainTitle.css"
import { useEffect, useState, useRef } from "react"


export default function HomeMainTitle(){//TODO: make background transition from wave to actual background smooth

    const [waveStyle, SetWaveStyle] = useState({
        bottom: "-210vw",
        finished: false
    })
    const [mainBackStyle, SetMainBackStyle] = useState({
        background: "#CFCFCF",
        backDeg: 0
    })
    const [waveFill, SetWaveFill] = useState(0)
    const [radSpin, SetRadSpin] = useState(0)

    const wave = useRef(null)
    
    useEffect(() => {
        
        SetWaveFill(setInterval(()=>{
            SetWaveStyle(x => {
                return {
                    ...x,
                    bottom: (parseInt(x.bottom.replace(/[^\d.-]/g, ''))+20)+"vw"
                }
            })
        }, 4000))

        return () =>{
            clearInterval(waveFill)
        }
    }, [])
    useEffect(()=>{
        if (wave != null && wave.current != null && wave.current.getBoundingClientRect() != null){
            SetWaveStyle(x => {
                return {
                    ...x,
                    finished: wave.current.getBoundingClientRect().top + window.innerHeight < 0
                }
            })
            if(wave.current.getBoundingClientRect().top + window.innerHeight < 0){
                clearInterval(waveFill)
                
                SetWaveStyle(x => {
                    return {
                        ...x,
                        animation: "none",
                    }
                })
                SetMainBackStyle(x => {
                    return {
                        ...x,
                        background: `linear-gradient(${mainBackStyle.backDeg}deg, #f4b738 0%, #f4b738 71.5%, #E7DFD7 100%)`
                    }
                })
    
                SetRadSpin(setInterval(()=>{
                    SetMainBackStyle(
                        x => {
                            return {
                                ...x,
                                background: `linear-gradient(${x.backDeg+1}deg, #f4b738 0%, #f4b738 71.5%, #E7DFD7 100%)`,
                                backDeg: x.backDeg+1
                            }
                        }
                    )
                }, 200))
            }
        }


        return ()=>{
            clearInterval(radSpin)
        }
    }, [waveStyle.bottom])

    return (
        <>
            <div className="Main-Back" style={{background: mainBackStyle.background}}>
                <div className="Title-Container">
                    <h1>
                        Justin Zhang
                    </h1>
                    {waveStyle.finished ? <div className="White-Underline" /> : <div className="White-Underline-placeholder" />}
                </div>
                {!waveStyle.finished && <div className="Wave" style={{bottom: waveStyle.bottom}} ref={wave}/>}
            </div>
        </>
    )
}