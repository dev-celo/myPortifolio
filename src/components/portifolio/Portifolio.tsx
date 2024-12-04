import React from 'react'
import './portifolio.css'

const data = [
  {
    id: 1,
    image: '/Assets/ecommerce.png',
    title: 'E-commerce',
    github: 'https://github.com/dev-celo/ecommerce',
    demo: 'https://dev-celo.github.io/frontend-ecommerce/'
  },
  {
    id: 2,
    image: '/Assets/nlw.png',
    title: 'DoctorCare',
    github: 'https://github.com/dev-celo/NLW',
    demo: 'https://dev-celo.github.io/NLW/'
  },
  {
    id: 3,
    image: '/Assets/app-mata-mosquito.png',
    title: 'Game Mata Mosquito',
    github: 'https://github.com/dev-celo/App_mata_mosquito',
    demo: 'https://dev-celo.github.io/App_mata_mosquito/app-principal/index.html'
  },
  {
    id: 4,
    image: '/Assets/jogo-da-velha.png',
    title: 'Jogo da velha',
    github: 'https://github.com/dev-celo/jogo_da_velha',
    demo: 'https://google.com'
  },
  {
    id: 5,
    image: '/Assets/portfolio5.png',
    title: 'Page Title 5',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 6,
    image: '/Assets/portfolio6.jpg',
    title: 'Page Title 6',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
]


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My recent work</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portifolio__item">
                <div className="portifolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portifolio__item-cta">
                    <a href={github} className='btn' target='__blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portifolio