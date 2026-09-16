import { useState } from "react"

export default function() {
    const [value,setValue] = useState(0);

    function Counting() {
        setValue((val) => val + 1)
    }

    return(
        <div>
            <button onClick={Counting} style={{padding:"5px",border:"1px solid red"}}>value: {value}</button>
        </div>
    )
}