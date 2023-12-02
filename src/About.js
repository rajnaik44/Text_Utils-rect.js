import React,{useState} from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: 'white',
        backgroundColor: 'rgb(36 74 104)'
    })

    const [btntext, setBtntext] = useState('Enable Light mode')

    const toggleStyle = ()=>{
      if(myStyle.color === 'rgb(36 74 104)'){
        setmyStyle({
          color: 'white',
        backgroundColor: 'rgb(36 74 104)'
        })
        setBtntext('Enable Light mode')
      }
      else{
        setmyStyle({
          color: 'rgb(36 74 104)',
          backgroundColor: 'white',
          border: '1px solid white'
        })
        setBtntext('Enable Dark Mode')
      }
    }
    


    
  return (
    <div className='container' style={myStyle}>
    <h1>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils gives a way to analyze your text quickly and effectienctly . Be it word count, character count or anything.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}> 
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Browser Compatible
      This word counter software works in any web browser such as chrome ,firefox,etc.
        </div>
    </div>
  </div>
</div>
<div className="container">
<button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
</div>
    </div>
  )
}
