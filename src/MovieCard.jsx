//Estilos
import styles from "./MovieCard.module.css";


export function MovieCard ({movie}){
    console.log(styles);
    const imagenUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return <li className={styles.movieCard}>
        <img width={230} height={345} className={styles.movieImage} src={imagenUrl} alt={movie.title} />
        <div>{movie.title}</div>
        </li>
}