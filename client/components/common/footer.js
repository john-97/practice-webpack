import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="common-footer">
      <Link to="/">HOME</Link>
      <Link to="/todo">TODO</Link>
    </div>
  )
}

export default Footer
