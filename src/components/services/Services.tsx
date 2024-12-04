import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Frontend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Criação de interfaces intuitivas e visualmente atraentes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desenvolvimento de layouts responsivos e mobile-first.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Otimização da experiência do usuário (UX) e design focado em
                acessibilidade.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desenvolvimento com frameworks modernos como React.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementação eficiente com bibliotecas como Tailwind e
                Bootstrap.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Manipulação avançada do DOM e gerenciamento de eventos em
                JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integração com APIs externas para exibição dinâmica de conteúdo.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Aplicação de técnicas de SEO para melhorar a visibilidade do
                site.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Backend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementação de autenticação segura com JWT (JSON Web Token).
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desenvolvimento de APIs RESTful robustas e escaláveis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Domínio em bancos de dados relacionais como MySQL e SQL Server.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Criação de arquiteturas de software em camadas para melhor
                organização e manutenção.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experiência em desenvolvimento com Node.js e C# (.NET).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementação de práticas de segurança como validação de dados e
                proteção contra injeção de SQL.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integração de sistemas utilizando Docker para ambientes
                consistentes.
              </p>
            </li>
          </ul>
        </article>

        {/* END CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Excelência em comunicação clara e assertiva.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Trabalho em equipe com foco na colaboração e empatia.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Resiliência e proatividade para resolver problemas.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Capacidade de adaptação em ambientes dinâmicos e
                multidisciplinares.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Organização e gestão eficiente do tempo.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Liderança em projetos com habilidade para motivar equipes.</p>
            </li>
          </ul>
        </article>

        {/* END SOFT SKILLS */}
      </div>
    </section>
  );
};

export default Services;
