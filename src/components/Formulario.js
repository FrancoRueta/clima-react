import React,{useState} from 'react'
import Paises from '../utils/Paises'
import Error from './Error'

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {


    const [error, guardarError] = useState(false);

    // extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    //funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();


        //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        } 

        guardarError(false);

        //pasar al componente principal
        guardarConsultar(true);
    }

    return (
        <form onSubmit={handleSubmit}>

            {/*Operador ternario encargado de manejar el cartel de error. */}
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad" 
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                    />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select name="pais" id="pais" value={pais} onChange={handleChange}>
                    <Paises/>
                </select>
                <label htmlFor="pais">Pais:</label>
            </div>

            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
    );
}
 
export default Formulario;