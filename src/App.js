import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {

  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    
    const consultarAPI = async () => {
      
      if(consultar){
        const appId = "51f8127a7c66f0790910b520ee586a1e";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

        //deteccion de respuesta correcta/incorrecta.
        if(resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    }
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);


  let componente;
  if(error){
    componente =  <Error 
                    mensaje="No hay resultados"
                  />
  } else{
    componente =  <Clima
                    resultado={resultado}
                  />
  }


  return (
    <Fragment>
      <Header titulo="Clima Global" />

      <div className="contenedor-form">

        <div className="container">

          <div className="row">

            {/*Columna izq*/}
            <div className="col m6 s12">
              <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
              />
            </div>

            {/*Columna der*/}
            <div className="col m6 s12">

              {componente}

            </div>

          </div>

        </div>

      </div>

      <p style={{position:"fixed",bottom:"0" ,right:"0"}}>@2021 por Franco Rueta. &nbsp;&nbsp;</p>
    </Fragment>
  );
}

export default App;
