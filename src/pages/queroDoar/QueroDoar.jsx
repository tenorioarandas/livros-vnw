import iconeLivro from "../../assets/iconeLivro.png";
import S from "../queroDoar/querodoar.module.scss";

export default function QueroDoar() {
  return (
    <section className={S.sectionForm}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>
      <form className={S.form}>
        <div className={S.tituloForm}>
          <img src={iconeLivro} alt="Ícone de um livro azul aberto" />
          <h2>Informações do Livro</h2>
        </div>

        <input type="text" id="" name="" placeholder="Título" />

        <input type="text" id="" name="" placeholder="Categoria" />

        <input type="text" id="" name="" placeholder="Autor(a)" />

        <input type="text" id="" name="" placeholder="Link da imagem" />

        <button type="submit">Doar</button>
      </form>
    </section>
  );
}
