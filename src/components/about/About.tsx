import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useState } from 'react'

const About = () => {
  const[showMore, setShowMore] = useState(false);
  const minhaFoto = 'src/Assets/me-about.jpg';

  function ShowCompleted(){
    setShowMore(!showMore);
  }


  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about">
          <div className="about__me">
            <div className="about__me-image">
              <img src="src/Assets/logo-dev-celo.png" alt="" />
            </div>
          </div>

          <div className='text__me'>
            <p>
              Baiano, Desenvolvedor web, prazer sou Marcelo.
              Estudante da Trybe, uma escola que ensina a programar, a aprender e a trabalhar. Gosto de estar me comunicando com todo tipo de diversidade e acho bacana conhecer pessoas diferentes, de locais e histórias diferentes;
              Por ser "viciado" em desafios, sou imerso no mundo dos esportes, tendo como alguns hobbies: futebol, natação, jiu-jitsu e basquete por exemplo!
            </p>

            {
              showMore && (
                <div className='show__more'>
                  <p>
                    Desenvolvedor Web com conhecimentos e habilidades em Typescript, React e sql onde. Além de conseguir manusear de maneira semântica HTML5, CSS3 e Bootstrap; tendo uma maior confiança em javascript com práticas de TDD. Pude aplicar essas habilidades em diversos projetos pessoais e avaliativos da trybe, postado no meu github.
                    Gosto de poder deixar minha criatividade me levar e criar aplicações que outras pessoas irão usar! Além disso gosto de estar muito próximo do meu foco para ter bons resultados!
                  </p>
                  <p>
                    Tenho observado que onde nós estamos faz total diferença em quem vamos nos tornar, por isso prezo por ambientes que me olham como uma pessoa, que respeite a natureza e qualquer manifestação de vida!
                  </p>
                  <small>
                    <p>
                      Podem me contatar por:
                      E-mail: marcelohenrique.backend@gmail.com
                      celular: (73) 99161-9209
                    </p>
                    <p>
                      Acessem meus projetos no github:
                      https://github.com/dev-celo
                    </p>
                  </small>
                </div>
              )
            }
          </div>
          
          <span id='button__show__more'>
            {
              showMore === false
                ? <button onClick={ShowCompleted}  className='btn'>
                  Leia mais
                </button>
                : <button onClick={ShowCompleted}  className='btn'>
                Leia menos
              </button>
            }
          </span>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>
                Repositório estruturado contruído no decorrer de 3 anos de estudos
              </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Trabalho Em Equipe</h5>
              <small>
                Prezo sempre pela colaboração, buscando uma comunicação assertia e convivência com diversidades
              </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>20+ projetos desenvolvidos no github</small>
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