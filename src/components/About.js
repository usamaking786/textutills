import React from 'react'

export default function About(props){
    // Create States Here

let myStyle = {
       color: props.mode === 'dark'?'042743':'black',
       backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
       border:'0.2px solid white'
    }
// const onClickBtn = ()=>{
// if(myStyle.color === 'black')
// {
// setMyStyle({
//     color : 'white',
//     backgroundColor : 'black',
//     border :'1px solid white'
// })
// setBtnText("Light Mode")
// }
// else{
//     setMyStyle({
//         color : 'black',
//         backgroundColor : 'white',
//         border :'1px solid black'
//     })
//     setBtnText("Dark Mode") 
// }
// }
  //  const [btnText,setBtnText] = useState("Dark Mode")
    return (
        <div>
{/* About Accordion Here */}
<h1>About US</h1>
<div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="flush-headingOne">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Word Analyzer
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={myStyle}>
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Convert Text To Upper and Lower Case
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Reading Time of Text
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

{/* <div className="btn btn-primary my-2" onClick={onClickBtn}>{btnText}</div> */}

{/* Ending Accordion here */}


        </div>
    )
}