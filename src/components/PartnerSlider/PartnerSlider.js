import React from 'react'

import styles from './PartnerSlider.module.scss'
import  dinersclub from '../../assets/images/Partners/dinersclub.jpeg'
import  infinitylogo from '../../assets/images/Partners/infinitylogo.png';
import  raftaarlogo from '../../assets/images/Partners/raftaarlogo.png';
import  tcrclogo from '../../assets/images/Partners/tc2rc2.png';
import  telegram from '../../assets/images/Partners/telegram.jpg';
import  verandalogo from '../../assets/images/Partners/vehrandalogo.png';
import minipunjab from '../../assets/images/Partners/minipunjab.jpeg';
import bemisaallogo from '../../assets/images/Partners/bemisaallogo.png';




const PartnerSlider = () => {
  
  let partnerLists = [raftaarlogo, infinitylogo, verandalogo, telegram, dinersclub, tcrclogo, bemisaallogo, minipunjab]


  return (
    <div className={styles.PartnerSlider}>
      <div>
        <h3>
        Some of our clients
        </h3>
      </div>
      <div className={styles.parnterList}>
          <marquee>{partnerLists.map((parnter,index) =><img src={parnter} className={styles.partnerImg} key={index} /> )}</marquee>
      </div>
    </div>
  )
}




export default PartnerSlider;