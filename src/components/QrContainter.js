import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import loadingIcon from '../assets/images/three_dots_loading.svg'
import html2canvas from 'html2canvas';

import {apiBaseUrl} from '../config.json'
import QrImage from './QrImage'


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
              setQrSticker(data.sticker)
            }
        });
  }

  const downloadSticker = () => {
    console.log('Downloading QR Sticker...')
  }


  const edit = props.edit
  const url = `https://glqr.me/#/${menuId}`


  return (
    <div className='container' style={{textAlign: "left"}}>
      
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
              <p>You are ready to adapt contactless dining. Download your QR code sticker and paste it on the table, window, etc..</p>
              <button onClick={() => downloadSticker()} className='black-yellow'>Download QR Sticker</button>
              <img src={qrSticker} alt='qr sticker'></img>
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
        <h4>Generating QR sticker for you ...</h4>
        <br></br>
        <img alt='' className='loading-icon' src={loadingIcon} />
      </div>
      )}

    </div>
  )
}

export default QrContainer

