import React from 'react'
import { Link } from 'react-router-dom'
import '../Routing/menu.css';

export default function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <Link to="/" id="links">Valores</Link>
                </li>
                <li>
                    <Link to="/jsx" id="links">EjemploJSX</Link>
                </li>
                <li>
                    <Link to="/api" id="links">Fetch data</Link>
                </li>
            </ul>
        </div>
    )
}
