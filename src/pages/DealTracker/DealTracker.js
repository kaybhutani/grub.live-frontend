import React , {createRef} from 'react'
import styles from './DealTracker.module.scss'
import BgImg from '../../assets/images/track-deal-bg.jpg'
import axiosInstance from "../../service/axios";

const DealTracker = () => {

  let formRef = createRef()
  let formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(e)/
    let payload = {};
    let childs = formRef.current.elements
    // consol e.log(childs)
    for(let i =0;i<childs.length;i++) {
      if(childs[i].name !== "" ) payload[childs[i].name] = childs[i].value;
    }
    let partnerCode = payload.partnerCode
    axiosInstance.get(`/partners/get-status/${partnerCode}`).then(res => {
      return res.data
    }).then(
      data => {
        // replace alerts with thankyou page redirect.
        if(data.success===true) {
          window.location = `/#/track/${partnerCode}`
        }
        else window.alert('Invalid Partner Code.')
      } 
    ).catch( err => {
      console.log(err)
      window.alert('Invalid Partner Code.')
    })
  }
  return (
    <div className={styles.DealTracker}>
      <div className={`container ` + styles.dealTrackerContent}>
        <h1>
        Track Deals
        </h1>
        <h3>
        Keep track of your ongoing deals. See which restaurants have onboarded grub.live, which are in progress and keep track of your payments.
        </h3>
        <form className={styles.trackForm} onSubmit={e => formSubmitHandler(e)} ref={formRef}>
          <div>
            <label>Enter Partner Code</label>
            <input type="text" required name="partnerCode"/>
          </div>
          <div className={styles.formSubmitWrapper}>
            <button type="submit">Track</button>
          </div>
        </form>
      </div>
      <div className={styles.imagerWrapper} style={{backgroundImage:`url(${BgImg})`,minHeight:'80vh'}}>
      </div>
    </div>
  )
}

export default DealTracker
