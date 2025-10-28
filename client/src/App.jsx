import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan', apellido: 'Pérez', correo: 'juan@example.com' },
    { id: 2, nombre: 'Ana', apellido: 'López', correo: 'ana@example.com' },
  ]);
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista de Usuarios</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.correo}</td>
              <td>
                <button className='btn btn-primary btn-sm me-2'>Editar</button>
                <button className='btn btn-danger btn-sm'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <button className='btn btn-success'>Agregar Usuario + </button>
    </div>
  );
}

export default App
