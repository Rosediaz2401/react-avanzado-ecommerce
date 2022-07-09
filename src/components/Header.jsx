import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Categorias from "../pages/Categorias";
import Home from "../pages/Home"
import Login from "../pages/Login";
// import microphone from '../Assets/images/microfono.png'
// import search from '../Assets/images/lupa.png'
import logo from '../Assets/images/logo.png'

import '../Styles/header.css'



const Header = () => {

    const InputValue = ({ producto, productosFiltrados, getdata }) => {
        console.log(producto);
        const [buscador, setbuscador] = useState("")
    
        useEffect(() => {
          let resultado = [];
        
          if (buscador !== '') {
              resultado = producto.filter(item => item.product_name.toLocaleLowerCase().includes(buscador))
              console.log(resultado);
          }
          else {
              getdata();
          }
          console.log(resultado);
          productosFiltrados(resultado, 'hola', true)
    
    
      }, [buscador])

   
      const searchItem = (valorInput) => {
    
          setbuscador(valorInput)
    
    
      }
      
    }  
   
  
    return (
        <>
            <div className="container">
                {/* <h2>Ajolote Shops</h2> */}
                <h2>ENVÍO GRATIS en toda la tienda - Entregas de 1 a 3 días hábiles.</h2>
            </div>
            <div className="navbar is-primary">
                <div className="navbar-brand">
                    <img className="logo-header" img src={logo} alt="logo" />
                    {/* <InputValue producto={producto} productosFiltrados={productosFiltrados} getdata={getdata} /> */}
                    <div className='input-box'>
                        <div className='main-input'>
                            <div className='main-input-container'>
                                {/* <img src={search} alt="search" /> */}
                                {<input className="input-header" type="text" placeholder='Search...' 
                                onChange={(e) => console.log(e.target.value)}
                                    />}
                                {/* <img src={microphone} alt="microphone" /> */}
                            </div>
                        </div>
                    </div>
                    <header >
                        <nav>
                            <ul>
                                <li className="nav-items">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to="/categorias">Categorias</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to="/login">Log in</Link>
                                </li>
                            </ul>
                        </nav>


                    </header>
                </div>
            </div>




        </>
    )
}


export default Header