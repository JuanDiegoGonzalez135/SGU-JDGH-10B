//const API_URL = "http://localhost:8080/api/usuarios/";

const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

export const getUsuarios = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.data || data; 
};

export const getUsuarioById = async (id) => {
  const res = await fetch(API_URL + id);
  const data = await res.json();
  return data.data || data;
};

export const crearUsuario = async (usuario) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return res.ok;
};

export const actualizarUsuario = async (id, usuario) => {
  const res = await fetch(API_URL + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),  });
  return res.ok;
};

export const eliminarUsuario = async (id) => {
  const res = await fetch(API_URL + id, { method: "DELETE" });
  return res.ok;
};
