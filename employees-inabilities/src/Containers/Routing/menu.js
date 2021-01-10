import React from 'react'
import { Link } from 'react-router-dom'
import '../Routing/menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faTable, faStickyNote, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
    return (
        <div className="Menu">
                <p>Bootcamp</p>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faTable} color="rgb(97, 233, 158)"/>
                    <Link to="/" id="links">Valores</Link> 
                </li>
                <li>
                    <FontAwesomeIcon icon={faStickyNote} color="rgb(97, 233, 158)"/>
                    <Link to="/jsx" id="links">EjemploJSX</Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDatabase} color="rgb(97, 233, 158)"/>
                    <Link to="/api" id="links">Fetch data</Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faUser} color="rgb(97, 233, 158)"/>
                    <Link to="/employees" id="links">Employees</Link>
                </li>
            </ul>
        </div>
    )
}
