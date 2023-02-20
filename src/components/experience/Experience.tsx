import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Javascript Vanilla</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Metodologia Ágeis</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Context API</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>API</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Testes unitários</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Testes de integração</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Node JS</h4>
                <small className='text-light'>previous experience</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>Java</h4>
                <small className='text-light'>Previous Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>PHP</h4>
                <small className='text-light'>previous experience</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div className='experience__details-competence'>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 className='experience__details-competence'>git/github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience