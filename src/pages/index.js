import AnchorLink from 'react-anchor-link-smooth-scroll'

const HomePage = (props) => {
  return (
    <main>
      <AnchorLink href="#header">
        <div className="mitz-wrapper-logo">

          <img
            alt="Mitz IT logo"
            src="/playground_assets/m1i155-uiyf-200h.png"
            className="mitz-logo"
          />
        </div>
      </AnchorLink>
      <header className="mitz-background-gradient" id="header">
        <div className="container ">
          <span className="mitz-flex-header">
            <AnchorLink href="#about">sobre</AnchorLink>
            <AnchorLink href="#services">nossos serviços</AnchorLink>
            <AnchorLink href="#footer">nosso time</AnchorLink>
            <AnchorLink href="#footer">contato</AnchorLink>
          </span>

          <span className="mitz-title-header">
            <h1>
              Soluções de precisão<br />
              Qualidade de ponta a ponta
            </h1>
            <h5>
              Metodologias ágeis e soluções turn key.<br />
              Prezando pelo simples e efetivo.
            </h5>
          </span>
        </div>

      </header>

      <section className="mitz-container">
        <div className="mitz-about" id="about">
          <div className="container">
            <h2>Sobre nós</h2>
            <span className="mitz-about-subtitle">
              Consultoria de arquitetura e outsourcing de desenvolvimento de<br></br>
              software focado 100% no que o cliente realmente necessita.
            </span>
            <br></br>
            <br></br>
            <span className="mitz-about-text">
              <p>
                Somos uma empresa que apoia desde as camadas mais baixas de
                desenvolvimento, atuando diretamente na execução do dia a dia,
                como também no apoio em decisões estratégicas na definição e
                organização de produtos e serviços de software, alinhando e
                solidificando as melhores práticas de mercado dentro da cultura
                do cliente já existente. A Mitz IT conta com squads
                multidisciplinares e presta consultorias em tecnologia para as
                equipes já existentes dentro da sua empresa.
              </p>
              <p>
                Para que isso ocorra, a Mitz IT tem uma sólida formação em
                arquitetura de software e boas práticas de mercado, aliados a
                uma equipe preparada para entregar não apenas o produto, mas
                também o processo e a garantia de vida longa e sustentável da
                sua base de código e sistemas. Trabalhamos desde a concepção e
                desenho do sistema até a entrega, bem como ajudamos a
                dimensionar a equipe correta para o trabalho e oferecemos a
                squad para executar, com todo o suporte necessário.
              </p>
              <p>
                Para poder manter uma equipe de ponta a Mitz IT se preocupa com
                seus talentos, com contratações 100% home office com liberdade
                geográfica, horários flexíveis e contratos com valores
                atrativos, entendendo que por trás de bons resultados sempre há
                pessoas comprometidas.
              </p>
            </span>
          </div>
        </div>

        <div className="mitz-about-values">
          <div className="container mitz-about-values-flex">
            <span className="mitz-about-img">
              <img
                alt="Mitz IT"
                src="/playground_assets/img1551-oy8f-400h.png"
              />
            </span>
            <span className="mitz-about-values-text">
              <h2>Nossos princípios</h2>
              <span>
                <p>
                  A Mitz IT é uma empresa de serviços, feito por pessoas e para
                  pessoas. A qualidade de entrega está diretamente relacionada ao
                  cuidado com seus talentos, razão pela qual prezamos por
                  processos que priorizem a comunicação assertiva, trabalho em
                  equipe e criatividade de cada um, mantendo a qualidade de vida
                  dos profissionais.
                </p>
                <p>
                  Nos ocupamos em ter equipes de excelência finamente alinhadas,
                  diversas e altamente preparadas e treinadas para entregar a
                  melhor solução para o negócio do cliente.
                </p>
              </span>
            </span>
          </div>
        </div>

        <div className="mitz-services" id="services">
        <div className="landingpagemitzit-nossosservios">
        <span className="landingpagemitzit-text046">
          <span>Nossos serviços</span>
        </span>
        <img
          alt="Rectangle11551"
          src="/playground_assets/rectangle11551-60kn-700h.png"
          className="landingpagemitzit-rectangle1"
        />
        <div className="landingpagemitzit-e-n-t-r-e-e-m-c-o-n-t-a-t-o">
          <span className="landingpagemitzit-text048">
            <span>ENTRE EM CONTATO</span>
          </span>
        </div>
        <span className="landingpagemitzit-text050">
          <span className="landingpagemitzit-text051">
            <span>Soluções e consultoria</span>
            <br></br>
            <span></span>
          </span>
          <span>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Oferecemos serviços de consultoria em arquitetura de software e
              de soluções. A consultoria comumente é o primeiro passo para
              enxergar as necessidades técnicas e dimensionar a squad
              necessária para o trabalho no tempo proposto, o que também
              realizamos. A consultoria apoia tanto a execução de um
              determinado produto de software como o setor de TI como um todo,
              de forma que haja sincronia com os stakeholders.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Trabalhamos diretamente com os especialistas no seu negócio para
              ajudar a identificar oportunidades de transformação e
              digitalização de processos e até mesmo de criação de novos
              produtos digitais, dando todo o passo a passo do desenvolvimento
              para entregar as funcionalidades pedidas através de software.
            </span>
            <br></br>
            <span>
              Já havendo uma equipe madura de TI e processos definidos, também
              atuamos procurando pontos de melhoria e evolução, com
              treinamento das pessoas chave para utilizarem as novas
              ferramentas.
            </span>
          </span>
        </span>
        <img
          alt="Rectangle21551"
          src="/playground_assets/rectangle21551-ijjs-700h.png"
          className="landingpagemitzit-rectangle2"
        />
        <div className="landingpagemitzit-e-n-t-r-e-e-m-c-o-n-t-a-t-o1">
          <span className="landingpagemitzit-text067">
            <span>ENTRE EM CONTATO</span>
          </span>
        </div>
        <span className="landingpagemitzit-text069">
          <span className="landingpagemitzit-text070">
            <span>Squads</span>
            <br></br>
            <span></span>
          </span>
          <span>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Para apoiar as definições feitas pelo time de arquitetura, a
              Mitz IT presta suporte na execução das demandas, oferecendo os
              profissionais mais capacitados para entregar exatamente o que
              for preciso no âmbito tecnológico.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Ajudamos a dimensionar a equipe e oferecemos todas as funções
              técnicas pertinentes, como desenvolvedores, analistas de QA,
              SREs, DevOps/DevSecOps, Data Scientists/Engineers, UI/UX,
              especialistas em segurança, líderes técnicos e arquitetos de
              software/solução prontos para executar e apoiar sua empresa com
              conhecimento e expertise técnica. Podemos trabalhar tanto em
              equipes fechadas como híbridas para ajudar ainda mais o processo
              e a tecnologia da sua empresa a evoluir.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Toda a gestão dos profissionais é feita por nós, com processos e
              indicadores transparentes de evolução e performance da equipe,
              adequando-se à processos já existentes na empresa para
              contribuir sem impacto na cultura existente.
            </span>
          </span>
        </span>
        <div className="landingpagemitzit-scroll">
          <span className="landingpagemitzit-text088">
            <span>01</span>
          </span>
          <span className="landingpagemitzit-text090">
            <span>02</span>
          </span>
          <span className="landingpagemitzit-text092">
            <span>03</span>
          </span>
        </div>
      </div>
        </div>

      </section>

      <footer className="mitz-footer" id="footer">
        <div className="container mitz-flex ">
          <span className="mitz-midia mitz-flex ">
            <span className="mitz-inta">
              <AnchorLink href="#header">Instagram</AnchorLink>
            </span>
            <span className="mitz-email">
              <AnchorLink href="#header">email@email.com</AnchorLink>
            </span>
            <span className="mitz-linkedin">
              <AnchorLink href="#header">Linkedin</AnchorLink>
            </span>
          </span>
          <AnchorLink href="#header">
            <img
              alt="Mitz IT logo"
              src="/playground_assets/mitzitbege1551-ij3l-200h.png"
              className="mitz-logo-footer"
            />
          </AnchorLink>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
