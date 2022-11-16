import "./Header.css";
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {

  const navigate = useNavigate();

  const handleOnClickInicio = () => {
    navigate('/inicio');

  }

  const handleOnClickPanel = () => {
    navigate('/panel');

  }

  const handleOnClickFavoritos = () => {
    navigate('/favoritos');

  }

  const handleOnClickEstadistica = () => {
    navigate('estadistica');
  }
  
  return (
    <Nav className="nav"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="nav__botonera">
        <Nav.Item className="nav__botonera__item">
          <p
            className="nav__item__link" 
            onClick={handleOnClickInicio}>Bienvenidos</p>
        </Nav.Item>
        <Nav.Item className="nav__botonera__item">
          <p 
            className="nav__item__link"
            onClick={handleOnClickPanel}>Peliculas
          </p>
          
        </Nav.Item>
        <Nav.Item className="nav__botonera__item">
          <p 
            className="nav__item__link" 
            onClick={handleOnClickFavoritos}>Favoritos
          </p>
        </Nav.Item>
        <Nav.Item className="nav__botonera__item">
          <p 
            className="nav__item__link" 
            onClick={handleOnClickEstadistica}>Estadística
          </p>
        </Nav.Item>
      </div>
      <img src={logo} alt="mh" />

    </Nav>
  )
}

export default Header

