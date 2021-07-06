import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import movies from "./Movies.json";

//Estilos
import styles from "./MoviesGrid.module.css"

export function MoviesGrid(){
    useEffect(() => [
        fetch("/discover/movie", {
            headers: {
                Authorization: "Bearer"
            }
        })
    ])
    return (
    <ul className={styles.moviesGrid}>
        {movies.map((movie) => 
        (<MovieCard key={movie.id} movie={movie}/>))}
    </ul>
    );
}