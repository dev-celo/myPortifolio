import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import * as Scroll from 'react-scroll';

const Nav = () => {
  return (
    <nav>

      {/* <Link activeClass="active" smooth spy to="about">
        ABOUT
      </Link> */}
      <Scroll.Link activeClass="active" smooth spy to="home" href="#home"><AiOutlineHome size={25}/></Scroll.Link>
      
      <Scroll.Link activeClass="active" smooth spy to="about" href="#about"><AiOutlineUser size={25}/></Scroll.Link>

      <Scroll.Link activeClass="active" smooth spy to="experience" href="#experience"><BiBook size={25}/></Scroll.Link>

      <Scroll.Link activeClass="active" smooth spy to="services" href="#services"><RiServiceLine size={25}/></Scroll.Link>
      
      <Scroll.Link activeClass="active" smooth spy to="contact" href="#contact"><BiMessageSquareDetail size={25}/></Scroll.Link>
    </nav>
  )
}

export default Nav

function updatePosition(arg0: string, updatePosition: any) {
  throw new Error('Function not implemented.')
}
