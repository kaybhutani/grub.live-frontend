import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import loadingIcon from '../assets/images/three_dots_loading.svg'
import {apiBaseUrl} from '../config.json'

const QrDownload = (props) => {

  const [qrSticker, setQrSticker] = useState(null)
  const [dataFetched, setDataFetched] = useState(false)
  let { menuId } = useParams()
  useEffect(()=> {
    if(!dataFetched) {
      fetch(`${apiBaseUrl}/qr/${menuId}`)
          .then(response => response.json())
          .then(data => {
            setDataFetched(true)
            if(data.success)
              {
                setQrSticker('data:image/png;application/octet-stream;base64,' + data.sticker)
              }
          });
    }
  }, [])
  

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
              <p>Your menu has been successfully updated in the previous <a rel="noopener noreferrer" target='_blank' href={url}>link</a> only.</p>
            </div>):
            (<>
              <h2>QR Menu Generated Successfully!</h2>
              <p>Your Digital menu is live <a rel="noopener noreferrer" target='_blank' href={url}>here</a>.<br></br> You can Download the QR code sticker and paste it on the table, window, etc.</p>
              <br></br>
              <a style={{textDecoration: 'none'}} href={qrSticker} download='qr-sticker.png' className='black-yellow'>Download QR Sticker</a>
              <br></br>
              <br></br>
              <br></br>
              <img src={qrSticker} alt='qr sticker' className='qr-sticker'></img>
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

export default QrDownload

