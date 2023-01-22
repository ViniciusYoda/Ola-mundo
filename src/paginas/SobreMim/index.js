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
            lorem
         </p>

         <p className={styles.paragrafo}>
            lorem
         </p>

         <p className={styles.paragrafo}>
            lorem
         </p>

         <p className={styles.paragrafo}>
            lorem
         </p>

         <p className={styles.paragrafo}>
            lorem
         </p>

         <p className={styles.paragrafo}>
            lorem
         </p>

      </PostModelo>
   )
}