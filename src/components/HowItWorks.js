import React from 'react'
import Step1 from '../assets/images/HowItWorks/step1.svg'
import Step2 from '../assets/images/HowItWorks/Step2.png'
import Step3 from '../assets/images/HowItWorks/Step3.png'
// import Step4 from '../assets/images/HowItWorks/Step4.png'
import Step5 from '../assets/images/HowItWorks/step5.svg'

const StepRight = (props) =>{

    return(
    <div className="how-it-works-div">
    <div className='textLeft'>
        <h1>Step {props.no}</h1>
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
            <h1>Step {props.no}</h1>
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
       <div>
       <StepRight
        name="Enter Restaurant name and Logo(optional)"
        no="1"
        imageURL={Step1}
        
         />

        <StepLeft 
         name="Create Food Category. (example: Chinese,South Indian etc.)"
         no="2"
         imageURL={Step3}

         />
 
        <StepRight
        name="Add Items and Price to categories"
        no="3"
        imageURL={Step2}
        
         />

        <StepLeft 
         name="Preview Your Menu and Generate QR code"
         no="4"
         imageURL={Step1}

         />

        <StepRight
        name="Now users simply scan QR code and view your virtual Menu"
        no="5"
        imageURL={Step5}
        
         />


         </div>
    )
}

export default HowItWorks