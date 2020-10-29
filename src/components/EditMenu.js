import React, { useState } from 'react'
import {apiBaseUrl} from '../config.json'
// import PreviewModal from './PreviewModal'
import {dummyRestaurantDetails} from '../dummyData.json'

const EditMenu = (props) => {
  
  const restaurantDetails = props.restaurantDetails
  const setRestaurantDetails = props.setRestaurantDetails

  // const [previewModal, setPreviewModal] = useState(false)
  const [submitState, setSubmitState]  = useState(false)
  const changeRestaurantTitle = (e) => {
  
    const temp = { ...restaurantDetails}
    temp.restaurantName =  e.target.value
    setRestaurantDetails(temp)
    
  }

  const changeEmailId = (e) => {
  
    const temp = { ...restaurantDetails}
    temp.emailId =  e.target.value
    setRestaurantDetails(temp)
    
  }
  
  // const togglePreviewModal = () => {
  //   setPreviewModal(!previewModal)
  // }

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
        e.preventDefault()
        addItem(categoryKey)
        
      }
  }




  const submitMenu = e => {
    if(!submitState) {
      setSubmitState(true)  
      if(!restaurantDetails.emailId || !restaurantDetails.restaurantName) {
        setSubmitState(false)
        window.alert('Restaurant name and Email Id cannot be blank')
        return
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(restaurantDetails)
      };
      fetch(`${apiBaseUrl}/submit`, requestOptions)
        .then(response => response.json())
        .then(data => {
          setSubmitState(false)
          console.log(data)
          if(!data.success)
            {
              window.alert('Some problem occrred while creating menu')
              return
            }
            window.location = `/#/qr/${data.id }`
          
        });
    }
  }

  return (
    <div className='edit-menu'>
      {/* {
        previewModal ? <PreviewModal restaurantDetails={restaurantDetails} togglePreviewModal={togglePreviewModal}/>
        :<></>
        
      } */}
      
      <h2>Edit Menu <i className='eos-icons'>edit</i></h2>
      <p>Please enter the following details to create your Virtual QR Menu.</p>
      {restaurantDetails.restaurantName ? 
      <></>
      :
      <button onClick={() => setRestaurantDetails(dummyRestaurantDetails)} className='hyperlink btn-link' style={{float: "right", color: '#007cbf'}}>
        Fill dummy data  <i className='eos-icons'>keyboard</i>
      </button>
      }
      
      <br></br>
      <br></br>
      
      <form>
      <div className='shadow-box'>
        <p>Name of Restaurant</p>
        <input required={true} className='form-input' placeholder='Example: Moti Mahal Deluxe' onChange={ e => changeRestaurantTitle(e)} defaultValue={restaurantDetails.restaurantName}></input>
        <p>Logo (if any)</p>
        <input type='file' accept='image/*' onChange={e => updateLogo(e)}></input>
        <p>Email ID (You can use this to edit Menu later)</p>
        <input type="email" required={true} className='form-input' placeholder='Example: johndoe@gmail.com' onChange={ e => changeEmailId(e)} defaultValue={restaurantDetails.emailId}></input>
      </div>
      

      {restaurantDetails.menu.categories.map((element, categoryKey) => {
         return (
         
         <div className='shadow-box' key={categoryKey}>
           <i onClick={() => deleteCategory(categoryKey)} style={{float: 'right'}} className='eos-icons delete-icon'>close</i>
          <p>Title</p>
          <input required={true} onKeyDown={(e) => handleKeyDown(e, categoryKey)} defaultValue={restaurantDetails.menu.categories[categoryKey].title} className='form-input' onChange={e => updateTitle(e,categoryKey)} placeholder='Example: Chinese food'></input>
          <br></br><br></br>
          <div>
            {
              restaurantDetails.menu.categories[categoryKey].items.map((item, itemKey) => {
                return (
                  <div key = {itemKey}>
                    <div style={{display: "inline-block"}}>
                      <p>Item Name</p>
                      <input required={true} onChange = {(e) => itemOnChange('name', e, categoryKey, itemKey)} defaultValue={restaurantDetails.menu.categories[categoryKey].items[itemKey].itemName} className='form-input' placeholder='Eg: French Fries'></input>
                    </div>
                    <div style={{display: "inline-block"}}>
                      <p>Price</p>
                      <input required={true} onKeyDown={(e) => handleKeyDown(e, categoryKey)} onChange = {(e) => itemOnChange('price', e, categoryKey, itemKey)} defaultValue={restaurantDetails.menu.categories[categoryKey].items[itemKey].itemPrice} className='form-input' placeholder='Eg: Half: $4.99 , Full: $9.99'></input>
                    </div>
                    <i onClick={() => deleteItem(categoryKey, itemKey)} className='eos-icons delete-icon'>delete</i>
                  </div>
                )
              })
            }
          </div>
          <div style={{float: "right"}}>
            <button type='button' className='hyperlink btn-link' onClick={() => addItem(categoryKey)}>Add Item <i className='eos-icons'>add_circle_outline</i> </button>
          </div>


        </div>
        )
        
      })}
            
      <div>
        {/* <div style={{float: "right"}}>
          <button type='button' onClick={() => togglePreviewModal()} className='hyperlink btn-link preview-btn' >Preview <i className='eos-icons'>visibility</i> </button>
        </div> */}
        <div style={{float: "right"}}>
          <button type='button' className='hyperlink btn-link' onClick={() => addCategory()}>Add Category <i className='eos-icons'>add_circle_outline</i> </button>
        </div>
          <br></br>
          <br></br>
        <div style={{float: "right"}}>
          <button type='button' onClick={(e) => submitMenu(e)} className='black-yellow'>
            {submitState ? (
                `Generating...`
            ): (`Generate QR Menu`)}
            
          </button>
        </div>
      </div>

      </form>

    </div>
  )

}


export default EditMenu
