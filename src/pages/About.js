import React from 'react'


const About = () => {


  return (
    <div className='container'>
      <div style={{textAlign: 'center'}}>
        <h1>About Us</h1>
        <p></p>
      </div>
      {/* <br></br> */}
      <div className='container shadow-box'>
        <h2>Who are we ?</h2>
        <p>We are a team of passionate Developers, Designers and innovative thinkers. We aim to change the whole dining experience. Through grub.live, we aim to provide all restaurants with Free virtual QR Menu's.</p>
        <br></br>
        <h2>What are we solving ?</h2>
        <p>Many Countries and their state governments are mandating that restaurants turn to disposable menus to help protect restaurant visitors against the spread of COVID-19. Disposable single-use menus are safe but it will cost restaurant owners more money. Therefore here we are with our Virtual Menu, ensuring a safe outlet by avoiding any needless interaction with staff. It's Super Quick, Simple, Free, and Easy to Setup. </p>
        <br></br>
        <h2>How are we different ?</h2>
        <p>Although there are some solutions to the QR menu, but all of them are paid and they are doing more than it is required!<br></br>You neither want to replace waiters with robots or have customers order through app even when they are physically present in the restaurant! Your restaurant simply needs a QR menu for now and we promise to provide it for free forever! </p>
      </div>
      <br></br>
    </div>
  )
}

export default About