import { Link } from "react-router-dom";


export const Home = ({reyes}) => {
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
    return ( 
        <div className="container">
            {reyes.map(rey=>(
                <div className="card" key={rey.reinado}>
                   <Link to={`/${rey.nombre}`}>
                    <img src={`../../rey_${removeAccents((rey.nombre).toLowerCase())}.png`} alt="" />
                   </Link>
                </div>
            ))}
        </div>
     );
}
 