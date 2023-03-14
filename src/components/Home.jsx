export const Home = ({reyes}) => {
    return ( 
        <div className="container">
            {reyes.map(rey=>(
                <div className="card" key={rey.reinado}>
                    <img src={`../../rey_${(rey.nombre).toLowerCase()}.png`} alt="" />
                </div>
            ))}
        </div>
     );
}
 