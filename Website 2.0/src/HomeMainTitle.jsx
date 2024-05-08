import "./HomeMainTitle.css"
import { useEffect, useState } from "react"


export default function HomeMainTitle(){

    const [waveStyle, SetWaveStyle] = useState({
        bottom: "-210vw"
    })
    const [mainBackStyle, SetMainBackStyle] = useState({
        backgroundColor: "#CFCFCF"
    })
    const [waveFill, SetWaveFill] = useState(0)
    
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
        if(parseInt(waveStyle.bottom.replace(/[^\d.-]/g, '')) > -130){
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
                    backgroundColor: "#FFC738"
                }
            })
        }
    }, [waveStyle.bottom])

    return (
        <>
            <div className="Main-Back" style={mainBackStyle}>
                <div className="Title-Container">
                    <h1>
                        Justin Zhang
                    </h1>
                    {parseInt(waveStyle.bottom.replace(/[^\d.-]/g, '')) > -130 ? <div className="White-Underline" /> : <div className="White-Underline-placeholder" />}
                </div>
                {parseInt(waveStyle.bottom.replace(/[^\d.-]/g, '')) <= -130 && <div className="Wave" style={waveStyle} />}
            </div>
            <div className = "Main-Back-Footer">
                <div className="Main-Arrow" />
            </div>
            
        </>
    )
}