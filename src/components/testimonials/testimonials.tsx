import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import {  Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 

const data = [
  {
    avatar: 'src/Assets/avatar1.jpg',
    name: 'Nome 1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem ipsa assumenda alias accusamus ratione culpa dolores veniam quibusdam iure fuga blanditiis illum unde ips'
  },
  {
    avatar: 'src/Assets/avatar2.jpg',
    name: 'Nome 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem ipsa assumenda alias accusamus ratione culpa dolores veniam quibusdam iure fuga blanditiis illum unde ips'
  },
  {
    avatar: 'src/Assets/avatar3.jpg',
    name: 'Nome 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem ipsa assumenda alias accusamus ratione culpa dolores veniam quibusdam iure fuga blanditiis illum unde ips'
  },
  {
    avatar: 'src/Assets/avatar4.jpg',
    name: 'Nome 4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem ipsa assumenda alias accusamus ratione culpa dolores veniam quibusdam iure fuga blanditiis illum unde ips'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
              return(
                <SwiperSlide className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="Imagem cliente" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </SwiperSlide>
              )
          })
        }
      </Swiper>
    </section>
    
  )
}

export default testimonials