import React from 'react'


const About = () => {


  return (
    <div className='container'>
      <h1 style={{textAlign: 'center'}}>About Us</h1>
      {/* <br></br> */}
      <div className='container shadow-box'>
        <h2>Who are we ?</h2>
        <p>We are a team of passionate Developers, Designers and innovative thinkers. We aim to change the whole dining experience. Through grub.live, we aim to provide all restaurants with Free virtual QR Menu's.</p>
        <br></br>
        <h2>What are we solving ?</h2>
        <p>Many Countries and their state governments are mandating that restaurants turn to disposable menus to help protect restaurant visitors against the spread of COVID-19. Disposable single-use menus are safe but it will cost restaurant owners more money. Therefore here we are with our Virtual Menu, ensuring a safe outlet by avoiding any needless interaction with staff. It's Super Quick, Simple, Free, and Easy to Setup. </p>
        <br></br>
        <h2>How are we different ?</h2>
        <p>Although there are some solutions to the QR menu, but all of them are paid and they are doing more than it is required! Your restaurant simply need a QR menu for now and we promise to provide it for free forever! </p>
      </div>
    </div>
  )
}

export default About