import React, {useState, useEffect, } from 'react'
import './Panel.css'
import Item from '../Item/Item';
import Pelicula from '../Pelicula/Pelicula';
import { Button } from 'react-bootstrap';
import waiting from '../../assets/waiting.gif';

const Panel = () => {

  const [inputBuscar, setInputBuscar] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [mostrarBusqueda, setMostrarBusqueda] = useState("");
  const [idPelicula, setIdPelicula] = useState("");
  const [noEncontrado,setNoEncontrado] = useState("");
  const [movie, setMovie] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleOnClickObtenerPorTitulo = async(titulo) => {
    try {
      const fech = await fetch(`https://www.omdbapi.com?s=${titulo}&apiKey=60e0cb2a`);
      const data = await fech.json();
      if(data.Response === "True"){
        setResultadoBusqueda(data.Search)
        setNoEncontrado("")
        setInputBuscar("")
      }else{
        setNoEncontrado("Tú búsqueda no tuvo resultado ☝🏼")
      }
    } catch (error) {
      console.log(error)
      }
    }

  const mostrarPelicula = () => {
    setIdPelicula(mostrarBusqueda);
    setResultadoBusqueda([])
    setInputBuscar("")
  }

  const handleOnPressInput = (e) => {
    setInputBuscar(e.target.value);
  }

  useEffect( () => {
    mostrarPelicula();
  },[mostrarBusqueda])
  
  return (
    <section>
      <div className="principal">
        <div className="panel">
          <div className="panel__titulo">
            <h2>Buscar pelicula por Título</h2>
            <img src={waiting} alt ="Waiting..." />
          </div>
          <div className='panel__busqueda'>
            <div className="panel__busqueda__search">
              <Button 
                variant='success'
                onClick={()=>handleOnClickObtenerPorTitulo(inputBuscar)}>Buscar 🎬 </Button>
              <input 
                type="text"
                id='input-buscar'
                value={inputBuscar}
                placeholder='Guardians...'
                onChange={handleOnPressInput} />            
            </div>

            <ul className='panel__busqueda__resultado'>
              {
                resultadoBusqueda?.length > 0 ?
                  resultadoBusqueda?.map((p) => (
                    <Item 
                      item={p} 
                      key={p.imdbID} 
                      setMostrarBusqueda={setMostrarBusqueda} 
                      setMovie={setMovie} 
                      />
                  )) : <p>{noEncontrado}</p>
              }
            </ul>
          </div>
        </div>         
      </div>
      <div className="panel__pelicula">
            {
              <p className='mensaje'>{mensaje}</p>
            }
            {
              idPelicula  ? <Pelicula  movie={movie} setMensaje={setMensaje} /> : ""
            }
          </div>
    </section>
  )
}

export default Panel