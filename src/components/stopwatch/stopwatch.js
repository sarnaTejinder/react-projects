import React,{useState} from 'react'
import './stopwatch.css'
import StopwatchCard from './stopwatchCard'
import LapTime from './lapTime'

function Stopwatch(){
    const [timer,setTimer] = useState(0)
    const [laps,setLaps] = useState([])
    
return(<React.Fragment>
<div className = "stopwatch">
        <h1 className = "stopwatch-title">Simple Stopwatch</h1>
        <StopwatchCard timer={timer} 
        setTimer = {setTimer}
        setLaps = {setLaps}
        laps = {laps}
        /></div>
        {laps.length > 0 &&<LapTime laps={laps}/>}
        </React.Fragment>
        )
}

export default Stopwatch;