import React  , {createRef} from 'react'
import styles from './Register.module.scss'
import BgImg from '../../assets/images/register-restaurant-bg.jpg'
const RegisterRestaurant = () => {
  let formRef = createRef()
  let formSubmitHandler = (e) => {
    e.preventDefault();
    let payload = {};
    let childs = formRef.current.elements
    for(let i =0;i<childs.length;i++) {
      if(childs[i].name !== "" ) payload[childs[i].name] = childs[i].value;
    }
    console.log(payload)
  }
  return (
    <div className={styles.RegisterPage}>
      <div className={"container " + styles.registerContent}>
        <h1>Register your Restaurant</h1>
        <h3>Digitalize your menu in few easy steps.</h3>

        <form className={styles.registerForm} onSubmit={e => formSubmitHandler(e)} ref={formRef}>
          <div >
            <label>Restaurant name*</label>
            <input type="text" name="restaurant_name" required/>
          </div>
          <div>
            <label>Phone no.*</label>
            <input type="tel" name="phone" required/>
          </div>
          <div>
            <label>Owner name*</label>
            <input type="text" name="owner_name" required />
          </div>
          <div>
            <label>Email ID*</label>
            <input type="email" name="email" required/>
          </div>
          <div>
            <label>Partner Code (in any)</label>
            <input type="text" name="partner_code"/>
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