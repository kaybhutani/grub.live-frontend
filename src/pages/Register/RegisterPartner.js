import React, { createRef } from 'react'
import styles from './Register.module.scss'
import BgImg from '../../assets/images/register-partner-bg.jpg'
import axiosInstance from "../../service/axios";


const RegisterPartner = () => {
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
    axiosInstance.post(`/partners/register-partner`, payload).then(res => {
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
    <div className={styles.RegisterPage} >
      <div className={"container " + styles.registerContent}>
        <h1>Register as Partner</h1>
        <h3>Contribute to our growth and be a part of it.</h3>

        <form className={styles.registerForm} onSubmit={(e) => formSubmitHandler(e)} ref={formRef}>
          <div >
            <label>Name*</label>
            <input type="text" name="name" required/>
          </div>
          <div>
            <label>Phone no.*</label>
            <input type="text"  name="number" required/>
          </div>
          <div>
            <label>Email ID*</label>
            <input type="text" name="email" required/>
          </div>
          <div>
            <label>Instagram/Facebook page</label>
            <input type="text"  name="instagram"/>
          </div>
          <div>
            <label>Youtube Channel</label>
            <input type="text"  name="youtube"/>
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

export default RegisterPartner
