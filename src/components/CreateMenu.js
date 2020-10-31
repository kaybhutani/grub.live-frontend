import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import EditMenu from './EditMenu'
import PreviewMenu from './PreviewMenu'
import loadingIcon from '../assets/images/three_dots_loading.svg'
import {apiBaseUrl} from '../config.json'
import ReactGA from 'react-ga';

ReactGA.initialize('G-0BPQRCHTXK');


const CreateMenu = (props) => {

  const sampleRestaurantDetails = {
    emailId: "",
    restaurantName: "",
    logo: "",
    menu: {
      categories: [ ]
    }
  }
  const [restaurantDetails, setRestaurantDetails] = useState(sampleRestaurantDetails)
  const [dataFetched, setDataFetched] = useState(false)
  const [editDataCorrect, setEditDataCorrect] = useState(false)
  const edit = props.edit || false
  let { menuId, hash } = useParams()
  console.log(menuId, hash)

  if(edit && !dataFetched) {
    fetch(`${apiBaseUrl}/view?q=${menuId}`)
      .then(response => response.json())
      .then(data => {
        setDataFetched(true)
        if(data.success)
        {
          setRestaurantDetails(data.data)
          setEditDataCorrect(true)
        }
    });
  }
  
const fun = (()=> {
  if(edit) {

    if(dataFetched) {
      if(!editDataCorrect) {
        return (<h2>Invalid Edit link</h2>)
      }
    }
    else {
      return (
        <div className='loading-div'>
          <img alt='' className='loading-icon' src={loadingIcon} />
        </div>
      )
    }

  }
  
  return (
    <>
      <EditMenu restaurantDetails={restaurantDetails} setRestaurantDetails={setRestaurantDetails} edit={edit} menuId={menuId} hash={hash}/>
      <PreviewMenu restaurantDetails={restaurantDetails} />
    </>
  )
})
  return (

    <div className='container'>

      {

      fun()
    }
      
    </div>
  )
}

export default CreateMenu