import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useState } from 'react'

const About = () => {
  const[showMore, setShowMore] = useState('')
  const minhaFoto = 'src/Assets/me-about.jpg'

  function ShowCompleted(){
    setShowMore(showMore + 1)

    document.getElementById('button__show__more')?.classList.add('d-none')
  }


  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about">
          <div className="about__me">
            <div className="about__me-image">
              <img src='' alt="" />
            </div>
          </div>

          <div className='text__me'>
            <p>
              Desenvolvedor front - end com 1 ano de expêriência e noções gerais em back - end.
              Estudando análise e desenvolvimento de software e apaixonado por programação web.
            </p>

            {
              showMore && (
                <div className='show__more'>
                  <p>
                    Desenvolvendo em front - end tenho conhecimento em HTML, CSS, Javascript e React. 
                    - Bootstrap || Tailwind.
                  </p>

                  <p>
                    Como back - end, tenho entendimento prévio em PHP e linguagens de programação orientado à objetos (java).
                  </p>

                  <p>
                    Além tenho conhecimento e curto bastante Banco de dados relacional (SQL).
                  </p>

                  <p>
                    Uso de versionamento (Git/github); 
                  </p>
                  
                  <p>
                    Além de atributos técnicos, busco sempre melhorar minha comunicação e o trabalho em equipe. Também disso tento implementar no meu dia a dia o aprendizado mútuo com todos ao meu redor.
                  </p>

                </div>
              )
            }
          </div>
          
          <span id='button__show__more'>
            <button onClick={ShowCompleted}  className='btn'>
              Leia mais
            </button>
          </span>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>3+ Anos Estudando as principais tecnologias</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Trabalho Em Equipe</h5>
              <small>Prezando boa comunicação e trabalho em equipe</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>20+ projetos de médio porte desenvolvidos</small>
            </article>
          </div>
          
          <div className='btn-center'>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About