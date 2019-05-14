import React from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/main.scss'

/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

const Wrapper = () => {
  return (
    <div>WRAPPER</div>
  )
}

export default Wrapper
const htmlContainer = document.getElementById('react-container')
htmlContainer ? ReactDOM.render(<Wrapper />, htmlContainer) : false
