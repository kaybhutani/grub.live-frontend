import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    isEdit: state.menu.edit
  }
}


const MenuHeader = ({isEdit}) => {
  if(isEdit) {
    return (
    <>
      <h1>Update Menu</h1>
      <p>
        Any changes made here will be updated in your old menu only. You
        can add, delete or update the categories, items and price. The
        Restaurant name, logo and email ID cannot be changed for now.
        You don't have to worry for new QR code , the link and QR
        remains same.
      </p>
      <br/>
    </>
    )
  }

  return (
    <>
      <h1>Create Menu</h1>
      <p style={{ fontSize: "1.2em" }}>
        Creating menu is simple. Just enter your restaurant name, upload
        Logo and Email ID for future changes.<br></br>That's it. Now you
        can start adding the Dishes by creating a new category and
        adding items to it.
      </p>
    </>
  )
}

export default connect(mapStateToProps,null)(React.memo(MenuHeader))
