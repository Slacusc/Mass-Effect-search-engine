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
         <ul className="nav1 dropdown2">Juegos
            <div class="dropdown2-content">
                <a href="#">Mass Effect 1</a>
                <a href="#">Mass Effect 2</a>
                <a href="#">Mass Effect 3</a>
                </div>
      
        </ul>
        </div>
     </section>


</div>
)

}

export default Nav
