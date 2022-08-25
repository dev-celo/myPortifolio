import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  let myImg = 'src/Assets/me1.png'
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Marcelo Silva</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA></CTA>
        <HeaderSocials />

        <div className="me">
          <img src={myImg} alt="Minha imagem vestido de camisa branca" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header