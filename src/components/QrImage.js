import React from 'react'
import QRCode from 'qrcode.react'
import logo from '../assets/images/grub.live-logo.svg'

const QrImage = (props) => {

  const url = props.url
  const restaurantDetails = props.restaurantDetails.data
  console.log(restaurantDetails)

  return (

    <div className='qr-image'>
      <img src={logo} alt='' className='logo'></img>
      <hr></hr>
      <h2>
      {
        restaurantDetails.logo?
        <img src={restaurantDetails.logo} alt='' className='restaurant-logo'></img>
        :
        (<i className='eos-icons' style={{color: 'red', fontSize: '1em', margin: '8px'}}>local_dining</i>)
      }
      {restaurantDetails.restaurantName}
      </h2>
      <p>Scan to see Menu</p>
      <QRCode className='qr-code' value={url}/>
      <p>QR Menu Genreated with www.grub.live</p>
    </div>
  )

}

export default QrImage
