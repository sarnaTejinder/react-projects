import React,{useRef,useState} from 'react'
import Button from './Button'
function StopwatchCard (props){
    const {timer,setTimer,setLaps,laps} = props
    const [isActive,setIsActive] = useState(false)
    const [isPaused,setIsPaused] = useState(false)
    const inc = useRef(null)
    const startHandler = ()=>{
        setIsActive(true)
        setIsPaused(true)
        inc.current = setInterval(()=>{
            setTimer((timer) =>timer+1)
        },1000)
    }

    const pauseHandler = ()=>{
        clearInterval(inc.current)
        setIsPaused(false)
    }

    const resumeHandler=()=>{
        setIsPaused(true)
        inc.current = setInterval(()=>{
            setTimer(timer =>timer+1)
        },1000)
    }

    const resetHandler=()=>{
        clearInterval(inc.current)
        setIsActive(false)
        setIsPaused(false)
        setLaps([])
        setTimer(0)
    }
    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }

      const lapHandler =()=>{
          if(laps.length === 0){
            setLaps([formatTime()])
        }else{       
              const idx = laps.indexOf(formatTime())
          if(idx === -1){
            setLaps(laps =>{
                return [...laps,formatTime()]
            })}
        }
      }

    return(
        <div className='stopwatch-card'>
            <p className="time">{formatTime()}</p>
            <div className='buttons'>
            {
                !isActive && !isPaused ?
                <Button onClick={startHandler}>Start</Button>
                : (
                    isPaused ? <Button onClick={pauseHandler}>Pause</Button> :
                    <Button onClick={resumeHandler}>Resume</Button>
                )
            }
            <Button onClick={resetHandler} disabled={!isActive}>Reset</Button>
            {isActive && <Button onClick = {lapHandler}>Lap Time</Button>}
            </div>
        </div>
)}

export default StopwatchCard