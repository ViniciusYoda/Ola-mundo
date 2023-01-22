import styles from './Inicio.module.css';
import post from 'json/posts.json';
import Post from "componentes/Post";

export default function Inicio() {
   return(
         <ul className={styles.posts}>
            {post.map((post) => (
               <li key={post.id}>
                  <Post post={post}/>
               </li>
            ))}
         </ul>
   )
}