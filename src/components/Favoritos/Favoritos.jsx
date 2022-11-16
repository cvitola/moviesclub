import React, { useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { DataContext } from '../../DataContextProvider';
import MiFav from '../MiFav/MiFav';

const Favoritos = () => {
  const { favoritos, misPuntajes } = useContext(DataContext);

useEffect( ()=>{
  dibujar()
  localStorage.setItem('moviesFav', JSON.stringify(favoritos));
},[favoritos])


const dibujar = () => {
  //artilujioss 
  misPuntajes?.forEach( e => {
    favoritos.forEach( i => {
      if(e.imdbID === i.imdbID){
        i.MyScore = e.MyScore
      }
    })
  })
  return favoritos.map(
    (i) => <MiFav movie={i}/>) 
}

  return (
      <Container>
        <Row>
          <Col>
            <h2>Mis Favoritos</h2>
            {
              favoritos ? dibujar()
                : <h3>Todavia no tenes marcado ningun favorito! 📌 </h3>
            }
          </Col>
        </Row>
      </Container>
    )
  
}

export default Favoritos