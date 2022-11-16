import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../DataContextProvider';
import { Button, Dropdown, Container } from 'react-bootstrap';
import { FaCalendarAlt, FaChild, FaClock, FaFlag, FaBookOpen, FaUsers} from "react-icons/fa";
import '../MiFav/MiFav.css';
import '../../App.css';

const MiFav = ({movie}) => {
    let { favoritos, setFavoritos, misPuntajes, setMisPuntajes } = useContext(DataContext);
    
    const [score, setScore] = useState("");
    const [mensaje, setMensaje] = useState(false);
    const onClickSacar = (id) => {
        const nuevoArray = favoritos?.filter( fav => fav.imdbID !== id);
        setFavoritos(nuevoArray); 
        const otroArray = misPuntajes?.filter( m => m.imdbID !== id);
        setMisPuntajes(otroArray)
    }

    const onChangeScore = (val) => {
        setScore(val)
    }

     const onClickGuardar = () => {
        console.log(score)
        if(score && score !== "❗ Tenes que seleccionar un Puntaje"){
            movie.MyScore = score;
            const peli = misPuntajes.filter( m => m.imdbID === movie.imdbID)
            if(peli){
                const nuevoArray = misPuntajes.filter( m => m.imdbID !== movie.imdbID); //la quito
                setMisPuntajes([...nuevoArray,movie]); //la agrego modificada.
                setMensaje(true)
            }else{
                setMisPuntajes([...misPuntajes,movie]);
            } 
        }else{
            setScore("❗ Tenes que seleccionar un Puntaje")
            setMensaje("")
            alert("Seleccióna un Puntaje! 😵")
        }
        
     }

     useEffect( () => {
        localStorage.setItem('moviesPtjes', JSON.stringify(misPuntajes));
    },[misPuntajes])

  return (
    <Container>
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
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Puntuación
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item 
                        onClick={ () => onChangeScore(5)}>★★★★★</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={ () => onChangeScore(4)}>★★★★</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={ () => onChangeScore(3)}>★★★</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={ () => onChangeScore(2)}>★★</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={ () => onChangeScore(1)}>★</Dropdown.Item>
                </Dropdown.Menu>
             </Dropdown>
            <div className='fav__puntaje'>
                <p>Mi Puntuación: </p>
                <strong className='fav__puntaje__score'>{movie.MyScore ? movie.MyScore: score}</strong>
            </div>
            {
                mensaje ? <p>Listo podes cambiarla 🤙 </p> : ""}
        <Button variant='success' onClick={ () => onClickGuardar()}>Calificar ⭐ </Button>
        <Button variant='danger' onClick={()=>onClickSacar(movie.imdbID)}>Sacar de mis Favs 🗑️ </Button>
            
        </div>

    </article>
        
    </Container>
    
  )
}

export default MiFav