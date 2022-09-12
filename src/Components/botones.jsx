import React from "react"

function Nav() {
    return (
<div >
    <section className="nav">
     <img  className="logo" src="./src/img/mel.png" alt="logo" />  
        <div className="navcontent">
        <ul className="nav1">Multimedia</ul>
        <ul className="nav1">Home</ul>
        <ul className="nav1">Buscador</ul>
         <li className="nav1 dropdown2">Juegos
            <div class="dropdown2-content">
                <a href="#">me1</a>
                <a href="#">me2</a>
                <a href="#">me3</a>
                </div>
      
        </li>
        </div>
     </section>


</div>
)

}

export default Nav
