import '../App.css'
import { useState } from 'react';
export const Gifts = () => {

const[input,setInput]=useState("")
const [gift,setGift]=useState<string []>(["pelota","Tv","mouse"])
const handleChange = (e:any)=>{
   setInput(e.target.value)
}
const add = (e:any)=>{
   e.preventDefault()
    setGift([...gift,input])
   setInput("")
}

    return (
        <div className="gift">
            <div className="input">
                <form onSubmit={add} >

                <input placeholder="Add Regalos " onChange={handleChange} value={input} autoFocus></input>
               <button  type="submit" > Agregar</button>
                </form>
            </div> 
            <ul>
                {gift.map((item,i)=><li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}
