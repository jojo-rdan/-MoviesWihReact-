import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const genres = movie.genres.map(genre => 
        genre.name).join(' - ');
    const imagenUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imagenUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}><strong>Title: </strong> {movie.title}</p>
            <p><strong>Description: </strong>{movie.overview}</p>
            <p><strong>Genres: </strong>{genres}.</p>
        </div>
    </div>
}