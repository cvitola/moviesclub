import React from 'react'
import './Item.css';

const ResultadoBusqueda = ({item, setMostrarBusqueda, setMovie}) => {

  const handleOnClickObtenerPorID = async(id) => {
    try {
      const fech = await fetch(`https://www.omdbapi.com?i=${id}&apiKey=60e0cb2a`);
      const data = await fech.json();
      if(data.Response === "True"){
        setMostrarBusqueda(item.imdbID);
        setMovie(data)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <li className='item__busqueda' onClick={() => handleOnClickObtenerPorID(item.imdbID)}>
      <img src={item.Poster} alt="Imagen" />
      <i>{item.Title}</i>
      <i>{item.Year}</i>
    </li>
  )
}

export default ResultadoBusqueda