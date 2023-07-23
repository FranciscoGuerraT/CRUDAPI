import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"


const App = () => {

    const [empleados, setEmpleado] = useState([]);

    const ConsumirAPI = async () => {
        const response = await fetch("api/empleado/ObtenerEmpleado");

        if (response.ok)
        {
            const data = await response.json();
            console.log(data)
            setEmpleado(data)
        }
    }


    useEffect(() => {
        ConsumirAPI();
    },[])

    return (
        <div className="container-fluid">
            <h5>Lista de Empleados</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.dirccion}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

 export default App;