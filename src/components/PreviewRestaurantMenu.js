import React from 'react'

const PreviewRestaurantMenu = (props) => {

  const restaurantDetails = props.restaurantDetails

  return (
    <div className='shadow-box'>

    
    <h1 style={{textAlign: "center"}}>
    {restaurantDetails.logo?
    (<img src={restaurantDetails.logo} alt='' className='restaurant-logo'></img>)
  :
  (<i className='eos-icons' style={{color: 'red', fontSize: '1em', margin: '8px'}}>local_dining</i>)}  
  
      {restaurantDetails.restaurantName}</h1>

    </div>
  )

}

export default PreviewRestaurantMenu