import React from 'react'

const EditMenu = (props) => {
  
  const restaurantDetails = props.restaurantDetails
  const setRestaurantDetails = props.setRestaurantDetails
  const fun = (e) => {
  
    const temp = {... restaurantDetails}
    temp.restaurantName =  e.target.value
    setRestaurantDetails(temp)
    
  }

  const updateLogo = (e) => {
    const uploadedFile = e.target.files[0]
    if(uploadedFile) {
      if(uploadedFile.size > 2000000) {
        alert("Please upload an image with size less than 2 mb.")
        return;
      }

      const temp = {... restaurantDetails}
      temp.logo =  URL.createObjectURL(uploadedFile)
      setRestaurantDetails(temp)
      
    }
    
  }

  return (
    <div className='edit-menu'>
      <h2>Edit Menu <i className='eos-icons'>edit</i></h2>
      <p>Please enter the following details to create your Virtual QR Menu.</p>
      <br></br>
      <div className='shadow-box'>
        <p>Name of Restaurant</p>
        <input placeholder='Example: Moti Mahal Deluxe' onChange={ e => fun(e)} defaultValue={restaurantDetails.restaurantName}></input>
        <p>Logo (if any)</p>
        <input type='file' accept='image/*' onChange={e => updateLogo(e)}></input>
      </div>
      
      
      
      <div>
        <div style={{float: "right"}}>
          <a className='hyperlink'>Add Category <i className='eos-icons'>add_circle_outline</i></a>
        </div>
          <br></br>
          <br></br>
        <div style={{float: "right"}}>
          <button className='black-yellow'>Generate QR Menu</button>
        </div>
      </div>


    </div>
  )

}


export default EditMenu
