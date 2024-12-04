import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const officeImg = "/Assets/im-generic-art.jpeg";

  function ShowCompleted() {
    setShowMore(!showMore);
  }

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about">
          <div className="about__me">
            <div className="about__me-image">
              <img src={officeImg} alt="Office image colorful." />
            </div>
          </div>

          <div className="text__me">
            <p>
              Olá, sou Marcelo, um desenvolvedor web Jr, experiente em
              JavaScript, React, Node.js e C#. Tenho uma sólida experiência em
              desenvolvimento full-stack, arquitetura de software, design de
              APIs e otimização de desempenho, com conhecimentos avançados em
              Redux, Context API e Docker para aplicações containerizadas
            </p>

            {showMore && (
              <div className="show__more">
                <p>
                  Sou proficiente na implementação de autenticação segura com
                  JSON Web Token (JWT) e em testes automatizados para código
                  robusto e de fácil manutenção. Apaixonado por tecnologia e
                  trabalho em equipes coesas. Cresci em um ambiente esportivo,
                  valorizando o trabalho em equipe, liderança e resiliência,
                  trazendo empatia e paciência para minhas colaborações.
                </p>
              </div>
            )}
          </div>

          <span id="button__show__more">
            {showMore === false ? (
              <button onClick={ShowCompleted} className="btn">
                Leia mais
              </button>
            ) : (
              <button onClick={ShowCompleted} className="btn">
                Leia menos
              </button>
            )}
          </span>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência Consolidada</h5>
              <small>
                Mais de 3 anos desenvolvendo soluções web, com foco em
                performance, design escalável e práticas modernas de
                desenvolvimento.
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Colaboração e Liderança</h5>
              <small>
                Habilidade comprovada em trabalhar em equipes
                multidisciplinares, promovendo comunicação eficiente e
                integração com metodologias ágeis.
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Portfólio de Impacto</h5>
              <small>
                20+ projetos publicados no GitHub, abordando desde APIs RESTful
                a e-commerces completos, com tecnologias como React, Node.js e
                .NET.
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
