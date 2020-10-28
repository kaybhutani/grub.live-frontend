import React from 'react'
// import ImageAsHtml from 'react-render-as-image'
import QrImage from './QrImage'


const QrContainer = () => {

  const downlaodQrMenu = () => {
    console.log('downloading')
  }

  return (
    <div className='container' style={{textAlign: "center"}}>
      <h2>QR Menu Generated!</h2>
      <p>You are ready for contactless dining experience. Download your QR code and paste it on the table.</p>
      <button onClick={() => downlaodQrMenu()} className='black-yellow'>Download QR Menu</button>
      <QrImage url={'https://glqr.me/#/cTZueYOkfZzFaa78'} restaurantDetails = {{"data":{"logo":"http://res.cloudinary.com/kartikay/image/upload/v1603827958/soxg20lswyvcegxhwqkd.jpg","menu":{"categories":[{"items":[{"itemName":"Chowmein","itemPrice":"Half: $2.99, Full: 3.99"},{"itemName":"Momos","itemPrice":"Rs. 70"},{"itemName":"Sushi","itemPrice":"$ 4.99"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Dal makhani","itemPrice":"Rs. 199"},{"itemName":"Shahi paneer","itemPrice":"Rs. 399"}],"title":"North Indian \ud83c\udf5b","type":"text"}]},"restaurantName":"Poor Richard's Club"},"success":true}}/>
      {/* <ImageAsHtml width='500px' alt="QR image">
        <QrImage url={'https://glqr.me/#/cTZueYOkfZzFaa78'} restaurantDetails = {{"data":{"logo":"http://res.cloudinary.com/kartikay/image/upload/v1603827958/soxg20lswyvcegxhwqkd.jpg","menu":{"categories":[{"items":[{"itemName":"Chowmein","itemPrice":"Half: $2.99, Full: 3.99"},{"itemName":"Momos","itemPrice":"Rs. 70"},{"itemName":"Sushi","itemPrice":"$ 4.99"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Dal makhani","itemPrice":"Rs. 199"},{"itemName":"Shahi paneer","itemPrice":"Rs. 399"}],"title":"North Indian \ud83c\udf5b","type":"text"}]},"restaurantName":"Poor Richard's Club"},"success":true}}/>
      </ImageAsHtml> */}
    </div>
  )
}

export default QrContainer

