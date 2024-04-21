import React, { useState } from 'react'

function Calculator() {
    const [inputval, setinputval] = useState("")

  return (
    <>
    
        <h1 className='heading'>Calculator</h1>
    <div className='main_container'>
    <input   onChange={(e) => setinputval(e.target.value)} value={inputval} type="text" placeholder='calculate' />

  <div className="box">
     <button value="1" onClick={(e) => setinputval(inputval + e.target.value)}>1</button>
     <button value="2" onClick={(e) => setinputval(inputval + e.target.value)}>2</button>
     <button value="3" onClick={(e) => setinputval(inputval + e.target.value)}>3</button>
     <button value="+" onClick={(e) => setinputval(inputval + e.target.value)}>+</button>
     <button value="4" onClick={(e) => setinputval(inputval + e.target.value)}>4</button>
     <button value="5" onClick={(e) => setinputval(inputval + e.target.value)}>5</button>
     <button value="6" onClick={(e) => setinputval(inputval + e.target.value)}>6</button>
     <button value="-" onClick={(e) => setinputval(inputval + e.target.value)}>-</button>
     <button value="7" onClick={(e) => setinputval(inputval + e.target.value)}>-</button>
     <button value="8" onClick={(e) => setinputval(inputval + e.target.value)}>8</button>
     <button value="9" onClick={(e) => setinputval(inputval + e.target.value)}>9</button>
     <button value="*" onClick={(e) => setinputval(inputval + e.target.value)}>*</button>
     <button value="c" onClick={(e) => setinputval("")}>C</button>
     <button value="0" onClick={(e) => setinputval( inputval + e.target.value)}>0</button>
     <button value="00" onClick={(e) => setinputval( inputval + e.target.value)}>00</button>
     <button value="." onClick={(e) => setinputval( inputval + e.target.value)}>.</button>
     <button  onClick={(e) => setinputval(eval(inputval))}>=</button>
     <button  value="/" onClick={(e) => setinputval(inputval + e.target.value)}>/</button>
     <button  onClick={()=> setinputval(inputval.slice(0, -1)) } >DEL</button>
  </div>

    </div>
    </>
  )
}

export default Calculator