import React from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({text, children}) => {
  return (
    <div className={styles.dropdown}>
      <span>{text} <i className='eos-icons'>arrow_drop_down</i></span>
      <div class={styles.dropdownContent}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown