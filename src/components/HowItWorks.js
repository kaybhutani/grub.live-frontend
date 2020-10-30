import React from 'react'
import Step1 from '../assets/images/HowItWorks/step1.svg'
import Step2 from '../assets/images/HowItWorks/step2.svg'
import Step3 from '../assets/images/HowItWorks/step3.svg'
// import Step4 from '../assets/images/HowItWorks/Step4.png'
import Step5 from '../assets/images/HowItWorks/step5.svg'

const StepRight = (props) =>{

    return(
    <div className="how-it-works-div">
    <div className='textLeft'>
    <h1>{props.no} {props.head}</h1>
        <p>{props.name}</p>
    </div> 
    <div className="imgRight">
        <img src={props.imageURL}  alt=''></img>
    </div>     
    </div>
    )
}

const StepLeft = (props) =>{

    return(
        <div className="how-it-works-div">
         <div className='textRight'>
    <h1>{props.no} {props.head}</h1>
            <p>{props.name}</p>
        </div> 
        <div className="imgLeft">
            <img src={props.imageURL} alt=''></img>
        </div>      
        </div>
        )
  
}

const HowItWorks = () =>{

    return(
       <div className='container'>
           <div className='align-center'>
                <h2>How does it works for Restaurant's ?</h2>
                <p>Learn how Restaurant's can adapt Contact-less Menu's in just 4 simple steps!</p>
           </div>
           <br></br>
       <StepRight
        name="Restaurant owners enter the name of Restaurant, upload the logo (if there is any) and your Email ID which you can use to edit these menu's Later! If you are a lazy person like us, you can use the Fill dummy data button to create a beautiful menu with dummy data and just edit it!"
        head="Name and Logo"
        no="1."
        imageURL={Step1}
        
         />

        <StepLeft 
            head="Categories and Items"
            name="Create Food Category (example: Chinese,South Indian etc.) and start Adding items to it (example: French fries, burgers). You also have to add the corresponding price. Price can be text and in any currency. You can also use something like Half: $2.99, Full $3.99"
            no="2."
            imageURL={Step2}

         />
 
        <StepRight
        head="Preview your Menu"
        name="You can watch your menu change Live in the preview section. Just when you think it's perfect, go ahead and Generate it."
        no="3."
        imageURL={Step3}
        
         />

        <StepLeft
        head="Generate QR Menu"
        name="Once finalized, click on Generate QR Menu and wait for the QR code to be generated. You can download this QR code sticker and paste it on the tables, doors or wherever you want. User's have to just open the camera and scan this to see the menu."
        no="4."
        imageURL={Step5}
        
         />


         </div>
    )
}

export default HowItWorks