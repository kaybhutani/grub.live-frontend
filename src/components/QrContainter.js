import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import loadingIcon from '../assets/images/three_dots_loading.svg'
import {apiBaseUrl} from '../config.json'

const QrContainer = (props) => {

  const [qrSticker, setQrSticker] = useState(null)
  const [dataFetched, setDataFetched] = useState(false)
  let { menuId } = useParams()
  if(!dataFetched) {
    fetch(`${apiBaseUrl}/qr/${menuId}`)
        .then(response => response.json())
        .then(data => {
          setDataFetched(true)
          if(data.success)
            {
              setQrSticker('data:image/png;base64,' + data.sticker)
            }
        });
  }

  const edit = props.edit
  const url = `https://glqr.me/#/${menuId}`


  return (
    <div className='container' style={{textAlign: "center"}}>
      
      {dataFetched ? (
      <div>
          {qrSticker?
        (
          <div>
            {edit? 
            (<div style={{marginBottom: '40%'}}>
              <h2>Menu edited successfully!</h2>
              <p>Your menu has been successfully updated in the previous <a href={url}>link</a> only.</p>
            </div>):
            (<>
              <h2>QR Menu Generated!</h2>
              <p>You are ready to adapt contactless dining, your menu is live <a href={url}>here</a>. You can Download your QR code sticker and paste it on the table, window, etc.</p>
              <br></br>
              <a style={{textDecoration: 'none'}} href={qrSticker} download='qr-sticker.png' className='black-yellow'>Download QR Sticker</a>
              <br></br>
              <br></br>
              <br></br>
              <img src={qrSticker} alt='qr sticker' className='qr-sticker'></img>
              {/* <QrImage url={url} restaurantDetails = {restaurantDetails}/> */}
            </>) 
          }
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
      <div className='loading-div'>
        <h2>Generating QR sticker for you ...</h2>
      
        <img alt='' className='loading-icon' src={loadingIcon} />
      </div>
      )}

    </div>
  )
}

export default QrContainer

