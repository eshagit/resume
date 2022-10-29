import React from 'react'
import SocialLinks from '../constants/socialLinks'

const Footer = () => {
  return (
    <footer>
      <div>
        <SocialLinks styleClass="footer-icons"/>
        <p align="center">&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
