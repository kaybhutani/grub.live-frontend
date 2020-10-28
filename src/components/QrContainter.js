import React, {useState} from 'react'
import * as htmlToImage from 'html-to-image';
import {useParams} from 'react-router-dom'


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
          console.log(data)
          if(data.success)
            {
              setRestaurantDetails(data.data)
            }
        });
  }

  const url = `https://glqr.me/#/${menuId}`

  const downloadSticker = () => {
    console.log('Downloading QR Sticker...')
    htmlToImage.toPng(document.getElementById('qr-download'))
    .then(function (dataUrl) {
      var svgImg = document.createElement('a');
      svgImg.href = dataUrl;
      svgImg.setAttribute('download', 'QrMenu.png');
      svgImg.click();
      // document.body.append(svgImg)

      
    });
  }

  const downloadQrCode = () => {
    console.log('Downloading QR Code...')
    htmlToImage.toPng(document.getElementById('qr-code'))
    .then(function (dataUrl) {
      var svgImg = document.createElement('a');
      svgImg.href = dataUrl;
      svgImg.setAttribute('download', 'QrCode.png');
      svgImg.click();
      // document.body.append(svgImg)
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
      (<p style={{textAlign: "center", marginBottom: '40%'}}>Loading...</p>)}

    </div>
  )
}

export default QrContainer
