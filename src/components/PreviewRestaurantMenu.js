import React from 'react'

const PreviewRestaurantMenu = (props) => {

  const restaurantDetails = props.restaurantDetails

  return (
    <div className='shadow-box'>

      <div  style={{textAlign: "center"}}>
          <h1>
            {restaurantDetails.logo?
            (<img src={restaurantDetails.logo} alt='' className='restaurant-logo'></img>)
            :
            (<i className='eos-icons' style={{color: 'red', fontSize: '1em', margin: '8px'}}>local_dining</i>)}   
            {restaurantDetails.restaurantName}</h1>
        </div> 
    <br></br>
    <div>
      {restaurantDetails.menu.categories.map((element, key) => {
            return (
            
            <div key={key}>
            <h2>{element.title}</h2>
            
            <br></br><br></br>
            
          
          </div>)
          
        })}  
    </div>
    </div>
  )

}

export default PreviewRestaurantMenu