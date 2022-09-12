import React from "react"

function Nav() {
    return (
<div>
    <section className="nav">
     <img  className="logo" src="./src/img/mel.png" alt="logo" />
        <ul className="navcontent">
        <li className="nav1 dropdown2">Juegos
            <div class="dropdown2-content">
                <a href="#">me1</a>
                <a href="#">me2</a>
                <a href="#">me3</a>
                </div>
        </li>
        <li className="nav1">Multimedia</li>
        <li className="nav1">Home</li>
        <li className="nav1">Buscador</li>
        
        </ul>
     </section>


</div>
)

}

export default Nav
