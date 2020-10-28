import React from 'react'
// import ImageAsHtml from 'react-render-as-image'
import QrImage from './QrImage'


const QrContainer = () => {
  return (
    <div>
      <QrImage url={'https://glqr.me/#/cTZueYOkfZzFaa78'} restaurantDetails = {{"data":{"logo":"http://res.cloudinary.com/kartikay/image/upload/v1603827958/soxg20lswyvcegxhwqkd.jpg","menu":{"categories":[{"items":[{"itemName":"Chowmein","itemPrice":"Half: $2.99, Full: 3.99"},{"itemName":"Momos","itemPrice":"Rs. 70"},{"itemName":"Sushi","itemPrice":"$ 4.99"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Dal makhani","itemPrice":"Rs. 199"},{"itemName":"Shahi paneer","itemPrice":"Rs. 399"}],"title":"North Indian \ud83c\udf5b","type":"text"}]},"restaurantName":"Poor Richard's Club"},"success":true}}/>
      {/* <ImageAsHtml width='500px' alt="QR image">
        <QrImage url={'https://glqr.me/#/cTZueYOkfZzFaa78'} restaurantDetails = {{"data":{"logo":"http://res.cloudinary.com/kartikay/image/upload/v1603827958/soxg20lswyvcegxhwqkd.jpg","menu":{"categories":[{"items":[{"itemName":"Chowmein","itemPrice":"Half: $2.99, Full: 3.99"},{"itemName":"Momos","itemPrice":"Rs. 70"},{"itemName":"Sushi","itemPrice":"$ 4.99"}],"title":"Chinese Food \ud83c\udf5c","type":"text"},{"items":[{"itemName":"Dal makhani","itemPrice":"Rs. 199"},{"itemName":"Shahi paneer","itemPrice":"Rs. 399"}],"title":"North Indian \ud83c\udf5b","type":"text"}]},"restaurantName":"Poor Richard's Club"},"success":true}}/>
      </ImageAsHtml> */}
    </div>
  )
}

export default QrContainer

