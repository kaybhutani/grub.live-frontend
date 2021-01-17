import React, { useState } from 'react'

import styles from './PartnerSlider.module.scss'
import  Dominos from '../../assets/images/Partners/dominos.png'
import  MCD from '../../assets/images/Partners/mcd.png';
import CCD from '../../assets/images/Partners/ccd.png';



const PartnerSlider = () => {
  
  let partnerLists = [Dominos,MCD,CCD,Dominos,MCD]


  return (
    <div className={styles.PartnerSlider}>
      <div>
        <h3>
        Trusted by 1000+ users
        </h3>
      </div>
      <div className={styles.parnterList}>
          {partnerLists.map((parnter,index) =><img src={parnter} className={styles.partnerImg} key={index} /> )}
      </div>
    </div>
  )
}




export default PartnerSlider;