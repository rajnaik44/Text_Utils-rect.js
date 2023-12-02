import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const clearText = ()=>{
    let newText = (" ");
    setText(newText);
  }

  const removeExtraSpaces = () => {
    let manipulatedResult = text.replace(/\s+/g, ' ').trim();
    setText(manipulatedResult);
  }
  const removeDuplicateLines = () => {
    let lines = text.split('\n');
    let uniqueLines = Array.from(new Set(lines));
    let manipulatedResult = uniqueLines.join('\n');
    setText(manipulatedResult);
  };


   
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove extra spaces</button>
<button className="btn btn-primary mx-2 my-2" onClick={removeDuplicateLines}>Remove Duplicate Line</button>
    </div>
    <div className="container my-2"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").length} minutes to read  </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something In Text Box To Preview "}</p>
    </div>
    </>
  )
}
