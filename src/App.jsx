import React from 'react'
import './App.css'
import {Header} from "./componentes/Header"

function App() {

  const curriculoAndre = "/curriculo/curriculo.pdf"

  return (
    <Header acting="React" curriculo={curriculoAndre} expTime="1 ano"/>
  )
}

export default App
