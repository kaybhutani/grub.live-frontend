import React, { useEffect, useState } from 'react'

const PreviewRestaurantMenu = (props) => {

  const [restaurantDetails, setRestaruarntDetails] = useState(props.restaurantDetails)
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(()=> {

    if(searchQuery==="") 
      setRestaruarntDetails(props.restaurantDetails)
    else {
      // changing state obj to json
      const tempRestaurantDetails = JSON.parse(JSON.stringify(props.restaurantDetails))
      console.log(tempRestaurantDetails)
      tempRestaurantDetails.menu.categories.forEach(category => {
        
        const tempItems = []

        for(let i =0; i<category.items.length; i++) {
          if(category.items[i].itemName.toLowerCase().includes(searchQuery.toLowerCase().trim()))
            tempItems.push(category.items[i])
        }
        category.items = tempItems
      });
      
      
      setRestaruarntDetails(tempRestaurantDetails)
    }
  }, [props.restaurantDetails, searchQuery])

  // const searchDish = (e) => {
    
  // }

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
    
    <div style={{textAlign: "center"}}>
      <input type='text' name='search-restaurant' className='form-input' placeholder='Search Menu' onKeyUp={e => setSearchQuery(e.target.value)} ></input>
    </div>

    <br></br>
    <div>
      {restaurantDetails.menu.categories.map((element, key) => {
            return (
            
            <div key={key}>
            <h2>{element.title}</h2>
            

            {
              restaurantDetails.menu.categories[key].items.map((item, itemKey) => {
                return (<div key={itemKey}>
                  <p style={{display: "inline-block", margin: 0}}>{item.itemName}</p>
                  <p style={{float: "right", margin: 0}}>{item.itemPrice}</p>
                  <br></br>
                  <br></br>  
                </div>
                
                )
              })
            }
            
          
          </div>)
          
        })}  
    </div>
    </div>
  )

}

export default PreviewRestaurantMenu