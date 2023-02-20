import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';
import array_of_services from '../../services_API/servicesOfferApi';
import array_web_of_services from '../../services_API/servicesWebApi';

const Services = () => {
  const array_frontend = array_of_services()
  const array_web = array_web_of_services()

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
            {
              array_frontend.map((service) => (
                <li key={ service.id }>
                  <BiCheck className='service__list-icon'/>
                  <p>{ service.service }</p>
                </li>
              ))
            }
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
              <p>Bom entendimento de MySql</p>
              <p>Experiência com PHP 1° linguagem web que tive contato</p>
            </li>
          </ul>
        </article>
        {/* END CONTENT CREATION */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {
              array_web.map((service) => (
                <li key={service.id}>
                  <BiCheck className='service__list-icon'/>
                  <p>{ service.service }</p>
                </li>
              ))
            }
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services