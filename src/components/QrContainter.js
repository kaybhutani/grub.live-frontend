import React, {useState} from 'react'
import * as htmlToImage from 'html-to-image';
import {useParams} from 'react-router-dom'
import loadingIcon from '../assets/images/three_dots_loading.svg'
import html2canvas from 'html2canvas';

import {apiBaseUrl} from '../config.json'
import QrImage from './QrImage'


const QrContainer = (props) => {

  const [restaurantDetails, setRestaurantDetails] = useState(null)
  const [dataFetched, setDataFetched] = useState(false)
  let { menuId } = useParams();
  if(!dataFetched) {
    fetch(`${apiBaseUrl}/view?q=${menuId}`)
        .then(response => response.json())
        .then(data => {
          setDataFetched(true)
          if(data.success)
            {
              setRestaurantDetails(data.data)
            }
        });
  }

  const url = `https://glqr.me/#/${menuId}`

  const downloadSticker = () => {
    console.log('Downloading QR Sticker...')
    html2canvas(document.getElementById('qr-download')).then(function(canvas) {
      const aTag = document.createElement('a')
      aTag.setAttribute("href", canvas.toDataURL("image/png"))
      aTag.setAttribute("download", "QrCodeSticker.png")
      aTag.click()
      
  });
  }

  const downloadQrCode = () => {
    console.log('Downloading QR Code...')
    html2canvas(document.getElementById('qr-code')).then(function(canvas) {
      const aTag = document.createElement('a')
      aTag.setAttribute("href", canvas.toDataURL("image/png"))
      aTag.setAttribute("download", "QrCode.png")
      aTag.click()
      
  });
  }


  return (
    <div className='container' style={{textAlign: "center"}}>
      
      {dataFetched ? (
      <div>
          {restaurantDetails?
        (
          <div>
            <h2>QR Menu Generated!</h2>
            <p>You are ready for contactless dining experience. Download your QR code and paste it on the table.</p>
            <button onClick={() => downloadSticker()} className='black-yellow'>Download QR Sticker</button>
            <button onClick={() => downloadQrCode()} className='black-yellow'>Download QR Code</button>
            <QrImage url={url} restaurantDetails = {restaurantDetails}/>
          </div>
        ):
        (
          <div>
            <h1>Incorrect Menu Id</h1>
          </div>
        )}
      </div>
        )
      :
      (
      <div style={{textAlign: "center", marginBottom: '40%'}}>
        <img alt='' className='loading-icon' src={loadingIcon} />
      </div>
      )}

    </div>
  )
}

export default QrContainer

