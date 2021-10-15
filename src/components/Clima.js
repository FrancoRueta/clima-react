import React from 'react'

const Clima = ({resultado}) => {

    //extrar los valores
    const { name, main } = resultado;

    if (!name) return null;
    if (!main) return null;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">

                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {Math.round((main.temp - 273.1) * 10) / 10} <span> &#x2103; </span> <img alt={resultado.weather[0].description} title={resultado.weather[0].description} src={"http://openweathermap.org/img/w/"+resultado.weather[0].icon+".png"}></img>
                </p>
                <p style={{fontStyle: 'italic',fontWeight: 'lighter',fontSize: '2em'}}></p>
                <p>Temperatura Máxima:
                    {Math.round((main.temp_max - 273.1) * 10) / 10} <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    {Math.round((main.temp_min - 273.1) * 10) / 10} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}
 
export default Clima;