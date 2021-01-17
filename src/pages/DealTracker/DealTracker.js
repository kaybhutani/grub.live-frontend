import React , {createRef} from 'react'
import styles from './DealTracker.module.scss'
import BgImg from '../../assets/images/track-deal-bg.jpg'
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
    console.log(payload)
  }
  return (
    <div className={styles.DealTracker}>
      <div className={`container ` + styles.dealTrackerContent}>
        <h1>
        Status
        </h1>
        <h3>
        Keep track of your ongoing deals.
        </h3>
        <form className={styles.trackForm} onSubmit={e => formSubmitHandler(e)} ref={formRef}>
          <div>
            <label>Enter Partner Code</label>
            <input type="text" required name="partner_code"/>
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
