import { useParams } from "react-router-dom";

export const Rey = ({}) => {
    let dato = useParams();
    let {nombre} = dato;

    //Funcion para quitar la tilde de el texto
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
    return ( 
       <div className="rey">
            <img src={`../../rey_${removeAccents(nombre.toLowerCase())}.png`} alt="" />
            <h1>{nombre}</h1>
       </div>
     );
}
 