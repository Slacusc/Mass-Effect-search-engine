import React from "react";


function Content () {
    return (
     
        <section className="container">
            <section className="grid1">
              <h1 className="titulo1">Eres</h1>
        <div className="contenedor">
             <section className="dropdown">
                <li className="dropbtn">Selecciona </li>
                <div className="dropdown-content">
                    <li className="lista">MaleShep</li>
                    <li className="lista">FemShep</li>
                    
                </div>
               
            </section>
            <h1 className="titulo1">Clase</h1>
            <section className="dropdown">
                <li className="dropbtn">Selecciona</li>
                <div className="dropdown-content">
                    <li className="lista">Infiltrado</li>
                    <li className="lista">tanque</li>
                    <li className="lista">poto</li>              
                </div>
            </section>
            <section>
                <h1 className="titulo1"> Aqui va un checkbox</h1>
            </section>
            
            <section className="dropdown">
                <li className="search">Buscar</li>
            </section>
            </div>
         </section>
            <section className="grid2">
                <img className="foto" src="./src/img/portada.jpg" alt="logo"/>
            </section>
         </section>
    
    )
}

export default Content