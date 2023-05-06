import React, { useState } from 'react'

export default function TextForm(props)
{
    // Text change function here
    const onChangeHandle = (e)=>{
// console.log("onchanged")
setText(e.target.value);
    }
    // onclick function
    const onClickHandle = (e)=>{
// console.log("clicked")
// setText(e.target.value)
let newText = text.toUpperCase();
setText(newText);
    }
    const onClickLoHandle = (e)=>{
        // console.log("clicked")
        // setText(e.target.value)
        let newText = text.toLowerCase();
        setText(newText);
            }
    // Clear function 
    const onClickClear = (e)=>{
 let newText = text;
  newText = "";
  setText(newText);
    }
    const [text,setText] = useState("")
    return(
        <>
<div className={`text-${props.mode==='light'?'dark':'light'}`}>
<div className='mb-3'>
    <h3>{props.text}</h3>
    <textarea className={`form-control`}  value={text} onChange={onChangeHandle} 
    style={{backgroundColor:props.mode==='dark'?'#304f6d':'white',color:props.mode==='light'?'black':'white'}}
     id="exampleFormControlTextarea1" rows="6"></textarea>
    </div>
    <button className='btn btn-primary' onClick={onClickHandle}>To UpperCase</button>
    <button className='btn btn-primary mx-1' onClick={onClickLoHandle}>To LowerCase</button>
    <button className='btn btn-primary my-2' onClick={onClickClear}>Clear Text</button>
</div>
<div className={`text-${props.mode==='light'?'dark':'light'}`}>
    <h3>Summary</h3>
    <p>Number of Words are {text.split(" ").length} and Characters are {text.length}</p>
    <p>Reading time: {0.008 * text.split(" ").length} Minutes to read this paragraph </p>
    <h3>Perview</h3>
    <p>{text.length>0?text:'Please enter text above in the textbox to preview'}</p>
</div>
</>
    );
}