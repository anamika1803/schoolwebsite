import React, { useState } from 'react'

export default function Home() {
 let[value,setValue]=useState( '')
 function handle(e){
  setValue( value +e.target.innerHTML)


 }

 function equal(){
   setValue(eval(value))
 }

 function Ac(){
  setValue('')
 }

 function del(){
  setValue(value.toString().slice(0,-1))
 }
 return(
  <>
    <div  className='calculator table-auto border-spacing-5 text-center space-x-10  p-5 '>
      <input type='text' placeholder='0'
      value={value}/>

</div>
<div className=' table-auto  border-spacing-7   text-center  space-x-10 p-3'>
  <button onClick={Ac}>AC</button>
  <button onClick={del}>DEL</button>
  <button onClick={handle} >%</button>
  <button onClick={handle}>/</button>
</div>
<div className=' table-auto  border-spacing-7 text-center  space-x-11 p-3'>
  <button onClick={handle}>7</button>
  <button onClick={handle}>8</button>
  <button onClick={handle}>9</button>
  <button onClick={handle}>*</button>
</div>
<div className='  table-auto  border-spacing-7 text-center space-x-11 p-3'>
  <button onClick={handle}>4</button>
  <button onClick={handle}>5</button>
  <button onClick={handle}>6</button>
  <button onClick={handle}>-</button>
</div>
<div className=' table-auto  border-spacing-7 text-center space-x-11 p-3'>
  <button onClick={handle}>1</button>
  <button onClick={handle}>2</button>
  <button onClick={handle}>3</button>
  <button onClick={handle}>+</button>
</div>
<div className=' table-auto  border-spacing-7 text-center space-x-11 p-3'>
  <button onClick={handle}>00</button>
  <button onClick={handle}>0</button>
  <button onClick={handle}>.</button>
  <button id='equal' onClick={equal}>=</button>
</div>


  </>
 )
   
  
}
