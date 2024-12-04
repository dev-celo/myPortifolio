import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  function sendEmail(e: any) {
    e.preventDefault();
    emailjs.sendForm('service_3h5sxtl', 'template_8ixlnrs', e.target, 'u2JAbqTi5XZLU2e9j')
      .then((result) => {
        console.log(result);
          alert('Mensagem enviada com sucesso')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>marcelohenrique.backend@gmail.com</h5>
            <a target='__blank' href="mailto:marcelohenrique.backend@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+55 (73) 9 9161-9209</h5>
            <a target='__blank' href="https://api.whatsapp.com/send?phone=5573991619209">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linked in</h4>
            <h5>Marcelo H Silva</h5>
            <a target='__blank' href="https://www.linkedin.com/in/devcelo/">visit to profile</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email"  name='email' placeholder='Your Email' required/>
          <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact