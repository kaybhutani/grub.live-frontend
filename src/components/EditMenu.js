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

  const updateTitle = (e, key) => {
    const temp = {... restaurantDetails}
    temp.menu.categories[key].title = e.target.value
    setRestaurantDetails(temp)
  }

  const addItem = (key) => {
    const temp = {... restaurantDetails}
    temp.menu.categories[key].items.push({
      itemName: "",
      itemPrice: ""
    })
    setRestaurantDetails(temp)
  }

  const addCategory = () => {

    const temp = {... restaurantDetails}
    temp.menu.categories.push( {
      title: '',
      type: 'text',
      items: [

      ]
    }) 
    setRestaurantDetails(temp)
    console.log(restaurantDetails)
  }

  return (
    <div className='edit-menu'>
      <h2>Edit Menu <i className='eos-icons'>edit</i></h2>
      <p>Please enter the following details to create your Virtual QR Menu.</p>
      <br></br>
      
      
      <div className='shadow-box'>
        <p>Name of Restaurant</p>
        <input className='form-input' placeholder='Example: Moti Mahal Deluxe' onChange={ e => fun(e)} defaultValue={restaurantDetails.restaurantName}></input>
        <p>Logo (if any)</p>
        <input type='file' accept='image/*' onChange={e => updateLogo(e)}></input>
      </div>
      

      {restaurantDetails.menu.categories.map((element, key) => {
         return (
         
         <div className='shadow-box' key={key}>
          <p>Title</p>
          <input className='form-input' onChange={e => updateTitle(e,key)} placeholder='Example: Chinese food'></input>
          <br></br><br></br>
          <div>
            {
              restaurantDetails.menu.categories[key].items.map((item, itemKey) => {

                return (
                  <div key = {itemKey}>
                    <div style={{display: "inline-block"}}>
                      <p>Item Name</p>
                      <input className='form-input' placeholder='French Fries'></input>
                    </div>
                    <div style={{display: "inline-block"}}>
                      <p>Price</p>
                      <input className='form-input' placeholder='399'></input>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div style={{float: "right"}}>
          <a className='hyperlink' onClick={() => addItem(key)}>Add Item <i className='eos-icons'>add_circle_outline</i></a>
        </div>
        </div>)
        
      })}
      
      
      
      <div>
        <div style={{float: "right"}}>
          <a onClick={addCategory} className='hyperlink'>Add Category <i className='eos-icons'>add_circle_outline</i></a>
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
