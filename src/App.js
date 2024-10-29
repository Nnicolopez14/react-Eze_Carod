import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button';
import { useState } from 'react';
import Count from './components/Count';

function App() {
  console.log("Se renderiza app")

  return(
    <>
    <NavBar />

    <ItemListContainer greeting="bienvenido a mi tienda" />
    </>
  )
}

export default App;
