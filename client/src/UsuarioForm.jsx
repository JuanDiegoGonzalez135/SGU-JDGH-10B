import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { crearUsuario, actualizarUsuario, getUsuarioById } from "./services/usuariosService";

function UsuarioForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({ nombre: "", apellido: "", telefono: "", correo: "" });
  const editando = Boolean(id);

  useEffect(() => {
    if (editando) {
      getUsuarioById(id).then((data) => setUsuario(data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = editando
      ? await actualizarUsuario(id, usuario)
      : await crearUsuario(usuario);

    if (ok) navigate("/");
    else alert("Error al guardar usuario");
  };

  return (
    <div className="container mt-4">
      <h2>{editando ? "Editar Usuario" : "Nuevo Usuario"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={usuario.nombre}
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            value={usuario.apellido}
            onChange={(e) => setUsuario({ ...usuario, apellido: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input
            type="text"
            className="form-control"
            value={usuario.telefono}
            onChange={(e) => setUsuario({ ...usuario, telefono: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            value={usuario.correo}
            onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-success me-2">
          {editando ? "Actualizar" : "Guardar"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default UsuarioForm;
