import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProdutoForm } from './produto/ProdutoForm'
import { ProdutoForm2 } from './produto/ProdutoForm2'
import { ProdutoForm3 } from './produto/ProdutoForm3'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
      {/* <ProdutoForm /> */}
      {/* <ProdutoForm2 /> */}
      <ProdutoForm3 />
    </>
  )
}

export default App
