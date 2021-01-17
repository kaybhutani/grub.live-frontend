import React, { createRef } from 'react'
import styles from './Register.module.scss'
import BgImg from '../../assets/images/register-partner-bg.jpg'






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
  }

  return (
    <div className={styles.RegisterPage} >
      <div className={"container " + styles.registerContent}>
        <h1>Register as Partner</h1>
        <h3>Contribute to our growth and be a part of it.</h3>

        <form className={styles.registerForm} onSubmit={(e) => formSubmitHandler(e)} ref={formRef}>
          <div >
            <label>Name*</label>
            <input type="text" name="partner_name" required/>
          </div>
          <div>
            <label>Phone no.*</label>
            <input type="text"  name="phone" required/>
          </div>
          <div>
            <label>Email ID*</label>
            <input type="text" name="email" required/>
          </div>
          <div>
            <label>Food page insta/youtube (link)</label>
            <input type="text"  name="socila_media"/>
          </div>
          <div>
            <label>Partner Code (in any)</label>
            <input type="text" name="partner_code" />
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
