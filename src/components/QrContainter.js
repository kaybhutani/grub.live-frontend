import React from 'react'
import * as htmlToImage from 'html-to-image';


import QrImage from './QrImage'


const QrContainer = (props) => {

  const restaurantDetails = props.restaurantDetails
  const url = props.url

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
      
      {/* <ImageAsHtml width='500px' alt="QR image">
        <QrImage url={'https://glqr.me/#/cTZueYOkfZzFaa78'} restaurantDetails = {{"data":{"logo":"http://res.cloudinary.com/kartikay/image/upload/v1603827958/soxg20lswyvcegxhwqkd.jpg","menu":{"categories":[{"items":[{"itemName":"Chowmein","itemPrice":"Half: $2.99, Full: 3.99"},{"itemName":"Momos","itemPrice":"Rs. 70"},{"itemName":"Sushi","itemPrice":"$ 4.99"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Dal makhani","itemPrice":"Rs. 199"},{"itemName":"Shahi paneer","itemPrice":"Rs. 399"}],"title":"North Indian \ud83c\udf5b","type":"text"}]},"restaurantName":"Poor Richard's Club"},"success":true}}/>
      </ImageAsHtml> */}
    </div>
  )
}

export default QrContainer

