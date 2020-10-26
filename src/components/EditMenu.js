import React from 'react'

const EditMenu = (props) => {
  
  const restaurantDetails = props.restaurantDetails
  const setRestaurantDetails = props.setRestaurantDetails
  const fun = (e) => {
  
    const temp = { ...restaurantDetails}
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

      const reader = new FileReader()
      reader.readAsDataURL(uploadedFile)
      reader.onloadend = () => {

      const temp = {...restaurantDetails}
      temp.logo =  reader.result
      console.log(reader.result)
      setRestaurantDetails(temp)

      }
    }
    
  }

  const updateTitle = (e, key) => {
    const temp = {...restaurantDetails}
    temp.menu.categories[key].title = e.target.value
    setRestaurantDetails(temp)
  }

  const addItem = (categoryKey) => {
    const temp = {...restaurantDetails}
    temp.menu.categories[categoryKey].items.push({
      itemName: "",
      itemPrice: ""
    })
    setRestaurantDetails(temp)
  }

  const deleteItem = (categoryKey, itemKey) => {
    const temp = {...restaurantDetails}
    temp.menu.categories[categoryKey].items.splice(itemKey, 1)
    setRestaurantDetails(temp)
  }

  const itemOnChange = (itemType, e, categoryKey, itemKey) => {
    const temp = {...restaurantDetails}
    itemType === 'name' ? 
    temp.menu.categories[categoryKey].items[itemKey].itemName = e.target.value
    :
    temp.menu.categories[categoryKey].items[itemKey].itemPrice = e.target.value
    setRestaurantDetails(temp)
  }

  const addCategory = () => {

    const temp = {...restaurantDetails}
    temp.menu.categories.push( {
      title: '',
      type: 'text',
      items: [

      ]
    }) 
    setRestaurantDetails(temp)

  }

  const deleteCategory = (categoryKey) => {
    const temp = {...restaurantDetails}
    temp.menu.categories.splice(categoryKey, 1)
    setRestaurantDetails(temp)
  }

  const handleKeyDown = (e, categoryKey) => {
    if(e.keyCode === 13) 
      {
        addItem(categoryKey)
        
      }
  }

  const submitMenu = e => {
    
    console.log("ok")
  }

  return (
    <div className='edit-menu'>
      <h2>Edit Menu <i className='eos-icons'>edit</i></h2>
      <p>Please enter the following details to create your Virtual QR Menu.</p>
      <br></br>
      
      <form>
      <div className='shadow-box'>
        <p>Name of Restaurant</p>
        <input required={true} className='form-input' placeholder='Example: Moti Mahal Deluxe' onChange={ e => fun(e)} defaultValue={restaurantDetails.restaurantName}></input>
        <p>Logo (if any)</p>
        <input type='file' accept='image/*' onChange={e => updateLogo(e)}></input>
      </div>
      

      {restaurantDetails.menu.categories.map((element, categoryKey) => {
         return (
         
         <div className='shadow-box' key={categoryKey}>
           <i onClick={() => deleteCategory(categoryKey)} style={{float: 'right'}} className='eos-icons delete-icon'>close</i>
          <p>Title</p>
          <input required={true} onKeyDown={(e) => handleKeyDown(e, categoryKey)} className='form-input' onChange={e => updateTitle(e,categoryKey)} placeholder='Example: Chinese food'></input>
          <br></br><br></br>
          <div>
            {
              restaurantDetails.menu.categories[categoryKey].items.map((item, itemKey) => {
                return (
                  <div key = {itemKey}>
                    <div style={{display: "inline-block"}}>
                      <p>Item Name</p>
                      <input required={true} onChange = {(e) => itemOnChange('name', e, categoryKey, itemKey)} className='form-input' placeholder='Eg: French Fries'></input>
                    </div>
                    <div style={{display: "inline-block"}}>
                      <p>Price</p>
                      <input required={true} onKeyDown={(e) => handleKeyDown(e, categoryKey)} onChange = {(e) => itemOnChange('price', e, categoryKey, itemKey)} className='form-input' placeholder='Eg: Half: $4.99 , Full: $9.99'></input>
                    </div>
                    <i onClick={() => deleteItem(categoryKey, itemKey)} className='eos-icons delete-icon'>delete</i>
                  </div>
                )
              })
            }
          </div>
          <div style={{float: "right"}}>
          <a className='hyperlink' onClick={() => addItem(categoryKey)}>Add Item <i className='eos-icons'>add_circle_outline</i></a>
          </div>


        </div>
        )
        
      })}
      
      
      
      <div>
        <div style={{float: "right"}}>
          <a onClick={addCategory} className='hyperlink'>Add Category <i className='eos-icons'>add_circle_outline</i></a>
        </div>
          <br></br>
          <br></br>
        <div style={{float: "right"}}>
          <button type='submit' onClick={(e) => submitMenu(e)} className='black-yellow'>Generate QR Menu</button>
        </div>
      </div>

      </form>

    </div>
  )

}


export default EditMenu
