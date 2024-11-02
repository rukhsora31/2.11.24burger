import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

    const [isActive, setIsActive] = useState(false)
    const toggleBurger =() => {
        setIsActive(!isActive)
    }

    

  return (
    <>
    <header className="Header">
        <div className="container">
            <div className="header__wrapper">
                <img   className='logo' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />

                <div className={`header__menu ${isActive ? 'active' : ''}`}>
                    <a href="">home</a>
                    <a href="">catalog</a>
                    <a href="">portfolio</a>
                    <a href="">contacts</a>
                </div>

                <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
