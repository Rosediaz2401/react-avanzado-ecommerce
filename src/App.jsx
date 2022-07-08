import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Home from "./pages/Home"
import Categorias from "./pages/Categorias"
import Login from "./pages/Login";
import ProductoDetalle from "./pages/ProductoDetalle"
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import './App.css'



function App() {

  return (

    <div className="App">
      <Header />
      <header className="images-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />}>
            <Route path=":pid" element={<ProductoDetalle />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </header>
      <Footer />
    </div>
  )
}

export default App
