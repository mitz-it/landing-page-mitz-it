import AnchorLink from 'react-anchor-link-smooth-scroll'
import ContactForm from '../components/form'
import Logo from '../components/logo'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { AiOutlineMenu } from 'react-icons/ai';

const HomePage = (props) => {
  return (
    <main>
      <Logo />
      <header className="mitz-background-gradient" id="header">
        <div className="container ">
          <span className="mitz-flex-header">
            <AnchorLink href="#about">sobre</AnchorLink>
            <AnchorLink href="#services">nossos serviços</AnchorLink>
            <AnchorLink href="#team">nosso time</AnchorLink>
            <AnchorLink href="#contact">contato</AnchorLink>
          </span>
          <span className="mitz-flex-header-mobile">
            <Menu
              className="menu-mobile"
              key="menu-mobile"
              direction="bottom"
              align="end"
              position="initial"
              viewScroll="close"
              arrow={false}
              offsetX={0}
              offsetY={0}
              menuButton={<MenuButton className="menu-btn-mobile"><AiOutlineMenu /></MenuButton>} transition>
              <MenuItem><AnchorLink href="#about">sobre</AnchorLink></MenuItem>
              <MenuItem><AnchorLink href="#services">nossos serviços</AnchorLink></MenuItem>
              <MenuItem><AnchorLink href="#team">nosso time</AnchorLink></MenuItem>
              <MenuItem><AnchorLink href="#contact">contato</AnchorLink></MenuItem>
            </Menu>
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

          <img
            src="https://vinialexandre.github.io/landing-page-mitz-it/imgs/mitz_titulo_banner.png"
            alt="Logo Mitz IT"
            className="mitz-logo-banner"
          />
        </div>

      </header>

      <section className="mitz-container">
        <div className="mitz-about" id="about">
          <div className="container">
            <h2>Sobre nós</h2>
            <span className="mitz-about-subtitle">
              Software focado 100% no que o cliente realmente necessita.
            </span>
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
                src="https://vinialexandre.github.io/landing-page-mitz-it/imgs/nossos_principios.png"
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
          <div className="container">
            <h2>Nossos serviços</h2>
          </div>
          <div className="container mitz-flex">
            <div className="mitz-services-bg-black">
              <span>Soluções e consultoria</span>
              <p>
                Oferecemos serviços de consultoria em arquitetura de software e
                de soluções. A consultoria comumente é o primeiro passo para
                enxergar as necessidades técnicas e dimensionar a squad
                necessária para o trabalho no tempo proposto, o que também
                realizamos. A consultoria apoia tanto a execução de um
                determinado produto de software como o setor de TI como um todo,
                de forma que haja sincronia com os stakeholders.
              </p>
              <p>
                Trabalhamos diretamente com os especialistas no seu negócio para
                ajudar a identificar oportunidades de transformação e
                digitalização de processos e até mesmo de criação de novos
                produtos digitais, dando todo o passo a passo do desenvolvimento
                para entregar as funcionalidades pedidas através de software.
              </p>
              <p>
                Já havendo uma equipe madura de TI e processos definidos, também
                atuamos procurando pontos de melhoria e evolução, com
                treinamento das pessoas chave para utilizarem as novas
                ferramentas.
              </p>
              <div>
                <AnchorLink href="#contact" style={{ float: `right` }}>ENTRE EM CONTATO</AnchorLink>
              </div>
            </div>

            <div className="mitz-services-bg-black">
              <span>Squads</span>
              <p>
                Para apoiar as definições feitas pelo time de arquitetura, a
                Mitz IT presta suporte na execução das demandas, oferecendo os
                profissionais mais capacitados para entregar exatamente o que
                for preciso no âmbito tecnológico.
              </p>
              <p>
                Ajudamos a dimensionar a equipe e oferecemos todas as funções
                técnicas pertinentes, como desenvolvedores, analistas de QA,
                SREs, DevOps/DevSecOps, Data Scientists/Engineers, UI/UX,
                especialistas em segurança, líderes técnicos e arquitetos de
                software/solução prontos para executar e apoiar sua empresa com
                conhecimento e expertise técnica. Podemos trabalhar tanto em
                equipes fechadas como híbridas para ajudar ainda mais o processo
                e a tecnologia da sua empresa a evoluir.
              </p>
              <p>
                Toda a gestão dos profissionais é feita por nós, com processos e
                indicadores transparentes de evolução e performance da equipe,
                adequando-se à processos já existentes na empresa para
                contribuir sem impacto na cultura existente.
              </p>
              <div>
                <AnchorLink href="#contact" style={{ float: `right` }}>ENTRE EM CONTATO</AnchorLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mitz-team" id="team">
          <div className="container">
            <h2>Time</h2>
          </div>
          <div className="container">

            <div className="mitz-flex flex-team">
              <img
                alt="Rectangle122314"
                src="https://vinialexandre.github.io/landing-page-mitz-it/imgs/marcelo.jpg"
                className="mitz-img-team"
              />
              <div className="flex-text">
                <p>
                  <b>
                    Marcelo - Fundador da Mitz IT, Tech Lead, Arquiteto de
                    Software/Soluções e Gerente de Equipes
                  </b>
                </p>
                <p>
                  Com experiência de mais de 16 anos na área de desenvolvimento de
                  soluções via software e 8 anos como tech lead e coordenador de
                  equipes, já trabalhou em mais de 50 projetos de software para a
                  industria e workforce, atuando em clientes de todos os portes a
                  nível nacional e internacional.
                </p>
                <p>
                  Formado em engenharia e com especialização em Qualidade de
                  Software e Processos, sempre traz as boas práticas de
                  ferramentas, de processo e de arquitetura, exatamente como
                  demanda a área de TI e a excelência que impõe nos projetos em
                  que trabalha. Atua em todas as fases do projeto, desde o
                  desenvolvimento até a entrega final, relacionando-se com o board
                  da empresa a fim de garantir a sincronia dos dois mundos.
                </p>
              </div>
            </div>

            <div className="mitz-flex flex-team mitz-team-child2">
              <div className="flex-text">
                <p>
                  <b>
                    Juliana - Sócia da Mitz IT, Advogada e Responsável pela parte
                    Jurídica
                  </b>
                </p>
                <p>
                  Advogada, é responsável pela análise dos contratos dos clientes
                  quanto e dos prestadores de serviço a fim de garantir uma
                  relação saudável entre todas as partes, mitigando riscos para
                  todos. Juliana possui experiência de mais de 10 anos no setor
                  jurídico visando a empresa, mas nunca deixando de ter olhar
                  sobre o prestador.
                </p>
              </div>
              <img
                alt="Rectangle122314"
                src="https://vinialexandre.github.io/landing-page-mitz-it/imgs/ju.jpg"
                className="mitz-img-team"
              />
            </div>

          </div>
        </div>
        <span
          alt="mitz-pattern"
          className="mitz-pattern"
        />
        <div className="mitz-contact" id="contact">
          <div className="container">
            <h2>Entre em contato</h2>
          </div>
          <div className="container mitz-flex">
            <ContactForm />
          </div>
        </div>

      </section>

      <footer className="mitz-footer" id="footer">
        <div className="container mitz-flex ">
          <span className="mitz-midia mitz-flex ">
            <span className="mitz-inta">
              <a href="https://www.instagram.com/mitz__it/" target="_blank">Instagram</a>
            </span>
            <span className="mitz-linkedin">
              <a href="https://www.linkedin.com/company/mitz-it/" target="_blank">Linkedin</a>
            </span>
            <span className="mitz-email">
              <a href="#contact">contato@mitz.com</a>
            </span>
          </span>
          <AnchorLink href="#header">
            <img
              alt="Mitz IT logo"
              src="https://vinialexandre.github.io/landing-page-mitz-it/imgs/logo_footer.png"
              className="mitz-logo-footer"
            />
          </AnchorLink>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
