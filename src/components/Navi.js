import React from "react";
import { Link } from "react-router-dom";

const Navi = () => {
    return (
        <ul>
            <li>
                <Link to="/">counter</Link>
            </li>
            <li>
                <Link to="/thunkcounter">thunk counter</Link>
            </li>
            <li>
                <Link to="/postlist">post list</Link>
            </li>
        </ul>
    )
}

export default Navi;