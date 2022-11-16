import React, {useState} from 'react'
import "./Inicio.css";
import bienvenidos from '../../assets/bienvenidos.jpg';
import {Button, Container} from 'react-bootstrap';

const Inicio = () => {
  const [mostrar, setMostrar] = useState(false);

  const onClickEmpecemos = () => {
    mostrar ? setMostrar(false) : setMostrar(true)
  }

  return (
    <>
      <h1 className='inicio__titulo'>Somos Movie Club!</h1>
       <Container className="inicio">
        <img src={bienvenidos} alt="imagen de fondo" />
        <div className="inicio__empecemos">

            <h2>Let´s GO!</h2>
            {
              mostrar ? <div className="globo">
                          <p>Te mentí usá el menú princinpal 🤪</p>
                        </div>: ""
            }
            <p>
                Buscador de Peliculas y calificalas! 📃
            </p>

            <Button
              onClick={() => onClickEmpecemos()}>¡Empecemos! 🚀 </Button>

        </div>
      </Container> 
    </>

  )
}

export default Inicio