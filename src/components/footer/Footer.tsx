import React from 'react'
import './footer.css'
import { GrInstagram, GrLinkedinOption, GrGithub } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <img src="src/Assets/logotipo-dev-celo.png" alt="Logo Dev-Celo" />

      <ul className='permanlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimunials">Testemunials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" href="https://www.instagram.com/h_celo/">
          <GrInstagram  className='footer__socials-icon'/>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/marcelo-henrique-pereira-da-silva-308386205/">
          <GrLinkedinOption className='footer__socials-icon' />
        </a>

        <a target="_blank" href="https://github.com/dev-celo">
          <GrGithub className='footer__socials-icon' />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Marcelo silva 2022. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer