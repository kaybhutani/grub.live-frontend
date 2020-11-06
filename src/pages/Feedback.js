import React, { useState } from 'react'


const Feedback = () => {
  
  const [body, setBody]  = useState(null)
  const [subject, setSubject] = useState(null)

  
  return (
    <div className='container'> 
      <h1>Send us your Feedback!</h1>
      <p>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>
      <br></br>
      <div className='shadow-box' style={{maxWidth: '1024px',}}>
        <p>Title</p>
        <input onChange={(e) => setSubject(e.target.value)} className='form-input' type='text' placeholder='Example: Bug: QR code not downloading'></input>
        <br></br>
        <p>Description</p>
        <textarea onChange={(e) => setBody(e.target.value)} style={{minHeight: '128px'}} className='form-input'  placeholder='Example: When clicking on Download QR sticker button, no file is downloaded.'></textarea>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a rel="noopener noreferrer" target='_blank' href={`mailto:grubdotlive@gmail.com?subject=${subject}&body=${body}`} className='black-yellow' style={{textDecoration: 'none', margin: '0'}} >Send Feedback</a>
      </div>
      <br></br>
      
    </div>
  )
}

export default Feedback