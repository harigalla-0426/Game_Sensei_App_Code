import React from 'react'
import Controller from '../images/ps-controller.png'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <div className="p-0 m-0">
        <img
          className="bg-sm scale-50 p-0 m-0"
          src={Controller}
          alt="controller image"
        ></img>
        <p>Copyright &copy; {footerYear} TaHaRa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
