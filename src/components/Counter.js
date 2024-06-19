import { useState } from "react";

function Counter(){
    const [count,setCount] =useState(0);

    const decrement = () =>{
        if (count>0) setCount(count-1);
    }

    const increment = () =>{
        if (count<9) setCount(count+1);
    }

    return (
        <section>
            <div className="counter">
                <input className="input-btn inputs-style" type="button" onClick={decrement} disabled={count===0} value="-"/>
                <input className="input-txt inputs-style" type="text" value={count} readOnly/>
                <input className="input-btn inputs-style" type="button"  onClick={increment}  disabled={count===9} value="+"/>
            </div>
        </section>
    )
}

export default Counter;