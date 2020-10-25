import React from 'react'

const EditMenu = (props) => {
  
  const restaurantDetails = props.restaurantDetails
  const setRestaurantDetails = props.setRestaurantDetails

  return (
    <div className='edit-menu'>
      <h2>Edit Menu <i className='eos-icons'>edit</i></h2>
      <p>Please enter the following details to create your Virtual QR Menu.</p>
      <br></br>
      <div className='shadow-box'>
        <p>Name of Restaurant</p>
        <input onChange={(e) => setRestaurantDetails(e.target.value)} type='text'></input>
      </div>

    </div>
  )

}


export default EditMenu