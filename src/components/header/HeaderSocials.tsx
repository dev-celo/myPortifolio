import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { CgMediaLive } from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dev-celo/" target="_blank"><BsLinkedin size={30}/></a>
      <a href="https://github.com/dev-celo" target="_blank"><BsGithub size={30}/></a>
      <a href="#portifolio" target="_blank"><CgMediaLive size={30}/>  </a>
    </div>
  )
}

export default HeaderSocials