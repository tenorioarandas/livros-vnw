import livrosAcessiveis from "../../assets/livrosAcessiveis.png";
import incentivarLeitura from "../../assets/incentivarLeitura.png";
import transformacaoPessoal from "../../assets/transformacaoPessoal.png";
import direitosIguais from "../../assets/direitosIguais.png";
import s from "../inicio/inicio.module.scss";

export default function Inicio() {
  return (
    <>
      <section className={s.sectionDestaque}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.sectionBeneficios}>
        <h2>Por que devo doar?</h2>
        <div className={s.container}>
          <div className={s.div}>
            <img
              src={livrosAcessiveis}
              alt="Pessoas em círculo, representando a comunidade e a inclusão social"
            />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </div>
          <div className={s.div}>
            <img
              src={incentivarLeitura}
              alt="Um livro aberto, simbolizando o conhecimento, a aprendizagem e o hábito da leitura"
            />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={s.div}>
            <img
              src={transformacaoPessoal}
              alt="Um punho erguido, com pessoas abaixo, representando a comunidade que se beneficia da leitura"
            />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </div>
          <div className={s.div}>
            <img
              src={direitosIguais}
              alt="Uma balança, simbolizando a igualdade e o acesso equitativo ao conhecimento"
            />
            <p>
              Garante que todos, de sua condição, tenham oportunidades de
              aprendizado.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
