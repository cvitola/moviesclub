import React , {  useContext, useEffect } from 'react'
import './Pelicula.css'
import { FaAward, FaCalendarAlt, FaChild, FaClock, FaFlag, FaBookOpen, FaUsers} from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { DataContext } from '../../DataContextProvider';

const Pelicula = ({movie, setMensaje}) => {
    const { favoritos, setFavoritos} = useContext(DataContext);
    
    const agregarFavoritos = (id) => {
        const peli = favoritos.filter( f => f.imdbID === id)
        if(peli.length === 0){
            setFavoritos([...favoritos, movie]); //actualizo el estado General.          
            setMensaje("Agregada a favoritos 😁 ")
        }else{
            setMensaje("Oops! Ya está agregada 😅 ")
        }
    }

    useEffect( () => {
        localStorage.setItem('moviesFav', JSON.stringify(favoritos));
    },[favoritos])

  return (
    <article className='pelicula'>
        <img src={movie?.Poster} alt="img" />
        <div className="pelicula__metadatos">
            <h2>{movie?.Title}</h2>
            <div className="pelicula__metadatos__grupo">
                <p><strong><FaCalendarAlt /></strong> {movie?.Year}</p>
                <p className='pelicula__metadatos__basicos__alerta'>
                    <strong><FaChild /></strong> {movie?.Rated}</p>
                <p><strong><FaClock /> </strong>{movie?.Runtime}</p>
                <p><strong><FaFlag /> </strong>{movie?.Language}</p>
            </div>
            <div className="pelicula__metadatos__grupo">
                <p><strong><FaBookOpen /> </strong>{movie?.Writer}</p>
            </div>
            <div className='pelicula__metadatos__grupo'>
                <p><strong><FaUsers /> </strong>{movie?.Actors}</p>
            </div>
            <div className='pelicula__metadatos__grupo'>
                <p>{movie?.Plot}</p>
            </div>
            <div className="pelicula__metadatos__grupo">
                <p><strong><FaAward /></strong> {movie?.Awards}</p>
            </div>
            <Button
                onClick={() => agregarFavoritos(movie.imdbID)}>Sumar a mis Favs 🎯
            </Button>
        </div>
    </article>
  )
}

export default Pelicula