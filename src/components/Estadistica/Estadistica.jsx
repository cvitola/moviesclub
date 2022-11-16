import React, {useContext} from 'react'
import Grafico from './Grafico';
import { Container } from 'react-bootstrap';
import { DataContext } from '../../DataContextProvider';

const Estadistica = () => {
  const { misPuntajes } = useContext(DataContext);
  return (
    <Container>
        <h2 className='m-2 p-2'>Estadísticas</h2>
        <p className='m-4'>Se visualiza tu promedio de crítica de tus peliculas clasificadas 📈 </p>
        {
          misPuntajes.length > 0 ? <Grafico /> : <h3 className='m-4 p-4'>Aún no clasificaste películas 🎥 </h3>
        }
        
    </Container>
  )
}

export default Estadistica