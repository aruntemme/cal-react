import React from 'react'
import Button from './Button';
import { useState } from 'react';

function Calculator() {

  const [input,setInput] = useState("");
  const handleButtonEvent = (data) => {
    if(data === "c") {
      setInput("");
    } else if(data === "=") {
       // eslint-disable-next-line no-eval
       setInput((previousInput) => eval(previousInput));
      } else {
        setInput((previousInput) => `${previousInput}${data}`);
      }
  }

  return (
    <div className="w-10/12 sm:w-7/12 lg:w-5/12 mx-auto">
      <div>
        <input id="inputField" className="w-full border-2 rounded-lg text-3xl my-2 mt-10 pl-3 border-purple-300 h-20" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="enter"/>
      </div>
      <div className="grid gap-2 mx-auto grid-cols-4">
      <Button value="c" span="col-span-2" color="red" onClick={handleButtonEvent} />
        <Button value="%" color="red" onClick={handleButtonEvent}/>
        <Button value="+" color="yellow" onClick={handleButtonEvent}/>
        <Button value="7" color="red" onClick={handleButtonEvent} />
        <Button value="8" color="red" onClick={handleButtonEvent}/>
        <Button value="9" color="red" onClick={handleButtonEvent}/>
        <Button value="-" color="yellow" onClick={handleButtonEvent}/>
        <Button value="4" color="red" onClick={handleButtonEvent}/>
        <Button value="5" color="red" onClick={handleButtonEvent}/>
        <Button value="6" color="red" onClick={handleButtonEvent}/>
        <Button value="*" color="yellow" onClick={handleButtonEvent}/>
        <Button value="1" color="red" onClick={handleButtonEvent}/>
        <Button value="2" color="red" onClick={handleButtonEvent}/>
        <Button value="3" color="red" onClick={handleButtonEvent}/>
        <Button value="/" color="yellow" onClick={handleButtonEvent}/>
      </div>
      <div className="grid gap-2 mx-auto my-2 grid-cols-4">
        <Button span="col-span-2" value="0" color="yellow" onClick={handleButtonEvent}/>
        <Button span="col-span-1" value="." color="yellow" onClick={handleButtonEvent}/>
        <Button span="col-span-1" value="=" color="purple" onClick={handleButtonEvent}/>
      </div>
    </div>
  )
}

export default Calculator
