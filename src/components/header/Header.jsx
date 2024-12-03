import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";
import logoLivro from "../../assets/logoLivro.png";
import lupa from "../../assets/lupa.png";
import S from "./header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header className={S.header}>
        <div className={S.boxLogo}>
          <img src={logoLivro} alt="Imagem de um livro aberto com capa azul" />
          <h1>Livros Vai na Web</h1>
        </div>
        <nav className={S.navHeader}>
          <ul>
            <li>
              <Link className={S.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={S.link} to="/livrosdoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={S.link} to="/querodoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <div className={S.barraDeBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button className={S.button}>
            <img src={lupa} alt="Ícone de uma lupa branca" />
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosdoados" element={<LivrosDoados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
