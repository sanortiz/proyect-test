import React from 'react'
import { HashRouter } from "react-router-dom";
import Menu from '../../Containers/Routing/menu'
import Routing from "../../Containers/Routing/index"
import "./hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Hero = ({handleLogout}) => {

    return(
        <section className="hero">
            <nav>
                <p>Bootcamp</p>
                <div className="containerMenuButton">
                    <HashRouter>
                        <Menu />
                    </HashRouter>
                    <button onClick={handleLogout}>Logout<FontAwesomeIcon id="icon2" icon={faSignOutAlt}/></button>
                </div>
            </nav>
            <main>
                <Routing />
            </main>
        </section>
    )
}

export default Hero