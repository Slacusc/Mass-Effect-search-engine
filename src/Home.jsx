import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
        
          <main>
            <h2>Bienvenide</h2>
            <button className="nombres" ><Link to="/Buscador">Entrar</Link></button>
          </main>
     
          {/* <nav>
            <Link to="/about">About</Link>
          </nav> */}
        </>
      );
      
    }
    export default Home
