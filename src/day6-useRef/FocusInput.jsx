import { useRef } from "react";

export default function FocusInput() {

    const inputFocus = useRef(null);

    function focusinput() {
        inputFocus.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputFocus} placeholder="Enter Text"/>
            <button onClick={focusinput}>Focus To Input</button>
        </div>
    )
}


