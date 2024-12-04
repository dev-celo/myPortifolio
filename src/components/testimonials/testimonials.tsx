import React from "react";
import "./testimonials.css";
import "swiper/css/navigation";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: "/Assets/testemonials/guilherme-lucena.jpeg",
    name: "Guilherme Lucena",
    review:
      "Tive a oportunidade de trabalhar com o Marcelo em um dos projetos em grupo de front-end na Trybe. Em nossas reuniões, sempre se mostrou uma pessoa atenciosa e que atuava como mediador em conflitos ocorridos durante o desenvolvimento do projeto, escutando os pontos de todos os membros da equipe e pensando em soluções que atendessem a todos. Pude observar melhor como ele trabalha durante o desenvolvimento em pair programming no projeto realizado, em que desenvolvemos uma aplicação que simulava uma loja online. Nesse momento, pude observar melhor o seu domínio sobre boas práticas de front-end, mostrando-se confortável com o React e suas extensões, conseguindo lidar com os problemas com calma e dando o tempo necessário para sua compreensão. Por fim, acredito que o Marcelo é um profissional competente, que se preocupa com os colegas ao se redor, além de ser um dev front-end eficiente, que se preocupa com a legibilidade e praticidade do seu código. Uma pessoa tranquila e fácil de trabalhar, acredito que ele será uma boa adição a qualquer equipe que possa tê-lo.",
  },
  {
    avatar: "/Assets/testemonials/lucas-folha.jpeg",
    name: "Lucas Folha",
    review:
      "Durante o projeto que desenvolvemos juntos na @Trybe, pude contar com a excelente atuação do Marcelo. Ele assumiu a liderança do processo de forma muito profissional e colaborou efetivamente com todos os integrantes da equipe. Além disso, demonstrou uma lógica impressionante para a resolução de problemas.  Gostaria de destacar também a sua sensibilidade e empatia em relação aos demais membros da equipe. Durante um momento difícil em que perdi um familiar próximo, Marcelo prontamente se ofereceu para ajudar e se mostrou muito compreensivo. Por isso, gostaria de agradecer a sua dedicação e competência no projeto. Estou certo de que Marcelo tem um futuro promissor pela frente!",
  },
  {
    avatar: "/Assets/testemonials/vicente.jpeg",
    name: "Vicente Vendramin Guesser",
    review:
      "Recomendo o Marcelo sem pensar duas vezes, é um profissional muito comunicativo e assertivo. Durante o desenvolvimento de uma aplicação web, ele assumiu a liderança do squad e colaborou ativamente em todos os requisitos do projeto.Transparência e compreensão definem bem como é trabalhar com o Marcelo. Além de ser um ótimo desenvolvedor, nas horas vagas, se mostra disponível para auxiliar quem estiver com dificuldades, sejam técnicas e/ou teóricas. Sou muito grato por todo o apoio que ele me prestou durante o meu desenvolvimento profissional, sem dúvidas, o Marcelo, possui um futuro muito recompensador!",
  },
  {
    avatar: "/Assets/testemonials/victor-pinheiro.jpeg",
    name: "Victor Pinheiro",
    review:
      "Eu tive o prazer de trabalhar com o Marcelo no primeiro projeto em grupo da Trybe e fiquei impressionado com suas habilidades técnicas e capacidade de resolver problemas complexos. Ele é um programador extremamente talentoso e sempre entregou resultados de alta qualidade dentro dos prazos estabelecidos. Além disso, foi uma excelente experiência trabalhar com ele, sempre disposto a ajudar os colegas quando necessário. Eu recomendo fortemente o Marcelo para qualquer empresa que esteja buscando um profissional altamente competente e dedicado na área de programação.",
  },
  {
    avatar: "/Assets/testemonials/Filipe-bueno.jpeg",
    name: "Filipe Bueno",
    review:
      "Recomendo o Marcelo sem êxito, ele é um profissional muito dedicado e focado. Tive a oportunidade de fazer um projeto com ele e foi muito gratificante, o Marcelo é muito humano, tem muita paciência com os colegas de equipe, ajudando no que é preciso.Tem um pensamento lógico muito apurado e com raciocínio rápido. Está sempre disponível para ajudar. Sou muito grato por ele fazer parte do meu desenvolvimento.",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients and coworkers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        navigation={{
          nextEl: ".swiper-button-next", // Elemento para o botão "next"
          prevEl: ".swiper-button-prev", // Elemento para o botão "prev"
        }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Imagem cliente" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default testimonials;
