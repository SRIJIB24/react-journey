import { useState, useRef } from "react";

export default function StopWatch() {
    const [count, setCount] = useState(0);

    const timerRef = useRef(null);

    const startStopwatch = () => {
        if(timerRef.current !== null) {
            return;
        }
        timerRef.current = setInterval(() => {
            setCount((val) => val +1)
        }, 1000);
    }

    const resetStopwatch = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setCount(0);
    }

    return(
        <div>
            <div>
                <h4>{count}</h4>
            </div>
            <div>
                <button onClick={startStopwatch}>Start</button>
                <button onClick={resetStopwatch}>Reset</button>
            </div>
        </div>
    )

}