import React from 'react'
import './stopwatch.css'
function LapTime(props){
    return(<div className = "Laps">
        {props.laps.map(lap=><p className = "lap" key = {props.laps.indexOf(lap)+1}>
            Lap {props.laps.indexOf(lap)+1}: {lap}</p>)}
        </div>
    )
}

export default LapTime