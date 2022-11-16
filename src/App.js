
import './App.css';
import { useContext, useEffect} from 'react';
import { DataContext } from './DataContextProvider';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Router from './components/Router/Router';

function App() {
    //Persistencia de favoritos y puntajes los obtengo del LS...
    let misfavs = JSON.parse(localStorage.getItem('moviesFav'));
    if(!misfavs){
      misfavs = []
    }
    let mispjes = JSON.parse(localStorage.getItem('moviesPtjes'));
    if(!mispjes){
      mispjes = []
    }

    //y se lo revoleo al Context
    const { setFavoritos, setMisPuntajes } = useContext(DataContext);
    useEffect( () => {
      setFavoritos(misfavs);
      setMisPuntajes(mispjes)
    }, [])
    
  return (
    <Container className='app-contenedor' fluid>
      <Header />
      <Router />
      <Footer />
    </Container>
    
  );
}

export default App;
