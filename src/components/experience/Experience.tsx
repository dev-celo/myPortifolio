import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <meta name="" />
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>HTML</h4>
                <small className="text-light">Avançado</small>
                <p>Estruturas semânticas e acessíveis, otimizadas para SEO.</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>CSS</h4>
                <small className="text-light">Avançado</small>
                <p>Design responsivo, animações, e performance de estilos.</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>JavaScript</h4>
                <small className="text-light">Avançado</small>
                <p>Lógica de programação e frameworks modernos como React.</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>Bootstrap</h4>
                <small className="text-light">Avançado</small>
                <p>Layouts rápidos e integração eficiente com bibliotecas.</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediário</small>
                <p>
                  Estilos utilitários e personalizados para projetos modernos.
                </p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>React</h4>
                <small className="text-light">Intermediário</small>
                <p>Componentes reutilizáveis e gerenciamento de estado.</p>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>Node.js</h4>
                <small className="text-light">Intermediário</small>
                <p>
                  APIs RESTful escaláveis e integrações com serviços externos.
                </p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>C#</h4>
                <small className="text-light">Intermediário</small>
                <p>
                  Implementação de Web APIs utilizando .NET e práticas modernas.
                </p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>JWT (JSON Web Token)</h4>
                <small className="text-light">Intermediário</small>
                <p>Autenticação segura em sistemas distribuídos, com navegabilidade segura.</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>Arquitetura em Camadas</h4>
                <small className="text-light">Avançado</small>
                <p>
                  Design de sistemas escaláveis e modulares com
                  responsabilidades bem definidas.
                </p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>Docker</h4>
                <small className="text-light">Intermediário</small>
                <p>
                  Criação de containers para ambientes de desenvolvimento e
                  produção.
                </p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>Git/GitHub</h4>
                <small className="text-light">Avançado</small>
                <p>
                  Gestão de repositórios e colaboração com equipes em projetos
                  ágeis.
                </p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="experience__details-competence">
                <h4>MySQL</h4>
                <small className="text-light">Avançado</small>
                <p>
                  Otimização de consultas e modelagem de banco de dados
                  relacional.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
