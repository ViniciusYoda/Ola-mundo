import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png"
import styles from  './SobreMim.module.css';

export default function SobreMim() {
   return(
      <PostModelo 
         fotoCapa={fotoCapa}
         titulo="Sobre mim"
      >
         <h3 className={styles.subtitulo}>
            Olá, eu sou o Vinícius
         </h3>
         <img 
            src={fotoSobreMim}
            alt="foto do Vinícius"
            className={styles.fotoSobreMim}
         />    
         <p className={styles.paragrafo}>
            Eu gosto de estudar sobre o mundo da programação, principalmente sobre o mundo Front-end.
         </p>
         <p className={styles.paragrafo}>
            Possuo conhecimentos em Html, Css, JavasCript, Git, Sass e React.
         </p>
      </PostModelo>
   )
}