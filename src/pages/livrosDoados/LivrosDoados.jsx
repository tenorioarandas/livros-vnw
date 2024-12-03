import livroDoado from "../../assets/livroDoado.png";
import S from "../livrosDoados/livrosdoados.module.scss";

export default function LivrosDoados() {
  return (
    <section className={S.sectionDoacao}>
      <h2>Livros Doados</h2>
      <div className={S.boxLivro}>
        <img
          src={livroDoado}
          alt="Um livro chamado: O protagonista, de Susanne Andrade"
        />
        <ul>
          <li className={S.tituloDoLivro}>O protagonista</li>
          <li className={S.autorxDoLivro}>Susanne Andrade</li>
          <li className={S.generoLiterario}>Ficção</li>
        </ul>
      </div>
    </section>
  );
}
