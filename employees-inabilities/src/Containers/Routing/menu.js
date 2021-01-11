import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <FontAwesomeIcon id="icon" icon={faUser}/>
                    <Link to="/" id="links">Employees</Link>
                </li>
                <li>
                    <FontAwesomeIcon id="icon" icon={faTable}/>
                    <Link to="/inabilities" id="links">Inabilities</Link>
                </li>
            </ul>
        </div>
    )
}
