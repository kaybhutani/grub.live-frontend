import React  , {createRef} from 'react'
import styles from './Register.module.scss'
import BgImg from '../../assets/images/register-restaurant-bg.jpg'
import axiosInstance from "../../service/axios";

const RegisterRestaurant = () => {
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
    axiosInstance.post(`/partners/register-restaurant`, payload).then(res => {
      return res.data
    }).then(
      data => {
        // replace alerts with thankyou page redirect.
        if(data.success===true) {
          window.alert("Successfully registered")
          window.location = ""
        }
        else window.alert('Unable to register due to some error.')
      } 
    ).catch( err => {
      console.log(err)
      window.alert('Unable to register due to some error.')
    })
  }

  return (
    <div className={styles.RegisterPage}>
      <div className={"container " + styles.registerContent}>
        <h1>Register your Restaurant</h1>
        <h3>Digitalize your menu in few easy steps.</h3>

        <form className={styles.registerForm} onSubmit={e => formSubmitHandler(e)} ref={formRef}>
          <div >
            <label>Restaurant name*</label>
            <input type="text" name="restaurantName" required/>
          </div>
          <div>
            <label>Owners name*</label>
            <input type="text" name="ownerName" required />
          </div>
          <div>
            <label>Owners Phone no.*</label>
            <input type="tel" name="number" required/>
          </div>
          <div>
            <label>Owners Email ID*</label>
            <input type="email" name="email" required/>
          </div>
          <div>
            <label>Partner Code (if any)</label>
            <input type="text" name="partnerCode"/>
          </div>
          <div className={styles.formSubmitWrapper}>
            <button type="submit">
              Register
            </button>
          </div>

        </form>
      </div>
      <div className={styles.imagerWrapper} style={{backgroundImage:`url(${BgImg})`}}>
      </div>
    </div>
  )
}

export default RegisterRestaurant