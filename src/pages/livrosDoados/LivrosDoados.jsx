import livroDoado from "../../assets/livroDoado.png";
import s from "../livrosDoados/livrosdoados.module.scss";

export default function LivrosDoados() {
  return (
    <section className={s.section}>
      <h2>Livros Doados</h2>
      <div className={s.container}>
        <img
          src={livroDoado}
          alt="Um livro chamado: O protagonista, de Susanne Andrade"
        />
        <ul>
          <li className={s.tituloDoLivro}>O protagonista</li>
          <li className={s.autorxDoLivro}>Susanne Andrade</li>
          <li className={s.generoLiterario}>Ficção</li>
        </ul>
      </div>
    </section>
  );
}
