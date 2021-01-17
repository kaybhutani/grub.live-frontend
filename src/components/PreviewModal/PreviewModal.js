import React , {useState} from 'react'

export const PreviewModal = ({children}) => {
  
  
  let [showPreview, togglePreview] = useState(false);



  return (
    <>
      <div className="popup-preview-menu">
        <button onClick={() =>togglePreview((state) => !state)}>
        <i className='eos-icons' style={{marginRight:10}}>slideshow</i> {(!showPreview) ? 'Preview' :'Edit'}
        </button>
        <div className={`popup-preview-content ${(showPreview) ? 'active' : ''}`}>
            <div className="popup-preview-scroll">  
              {children}
            </div>
          </div>
        </div>
    </>
  )
}
