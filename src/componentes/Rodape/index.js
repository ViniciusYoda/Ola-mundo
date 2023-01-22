import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.png';

export default function Rodape() {
   return(
      <footer className={styles.rodape}>
         <MarcaRegistrada />

         Desenvolvido por Vinícius Yoda
      </footer>
   )
}