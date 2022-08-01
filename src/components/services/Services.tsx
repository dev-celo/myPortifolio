import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>FrontEnd</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cuidado efetivo com parte gráfica.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Melhor experiência ao usuário.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Layouts Responsivos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Projetos Desenvolvidos com React.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experiência em Bootstrap.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bom domínio do DOM e BOM do Javascript.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>BackEnd</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bom tratamento de segurança</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Domínio de Sql</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de painéis de login/cadastro em PHP</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Linguagem de Programação Orientada à Objetos</p>
            </li>
          </ul>
        </article>
        {/* END CONTENT CREATION */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de Web page dinâmica.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>One Pages Responsivos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de cardápios ou menús interativos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Planejamento, Construção e Manutenção de páginas Web.</p>
            </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services