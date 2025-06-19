import React from "react";
import { useState } from "react";
function Count(){
    let [count, setCount]=useState(0)
    let textcolor=count %2===0 ?'even':'odd'
    return(
<div className="main">
<h1 className={`text ${textcolor}`}>Count:{count}</h1>
<button onClick={()=>setCount(0)}>Reset</button>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
</div>
    )
}
export default Count;