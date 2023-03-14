import { NavLink } from "react-router-dom";


export const Nav = ({reyes}) => {
    return ( 
        <nav>
            <NavLink to="/home" className={`nav-link ${
               ({isActive}) => (isActive ? "activado"
                : null)
                }`} key={1}>Home</NavLink>
            {reyes.map(rey =>
                <NavLink to={`${rey.nombre}`} className={`nav-link ${
               ({isActive}) => (isActive ? "activado"
                : null)
                }`} key={rey.reinado}>{rey.nombre}</NavLink>
            )}
        </nav>
     );
}