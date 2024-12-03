import facebook from "../../assets/facebookIcon.png";
import twitter from "../../assets/twitterIcon.png";
import youtube from "../../assets/youtubeIcon.png";
import linkedin from "../../assets/linkedinIcon.png";
import instagram from "../../assets/instagramIcon.png";
import S from "../footer/footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={S.footer}>
        <p>4002-8922</p>
        <div className={S.boxImg}>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
        </div>
      </footer>
      <div className={S.creditosBox}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </div>
    </>
  );
}
