// src/services/loginService.js
import { post } from "../api.js";

export async function loginUsuario(usuario, password) {
  const response = await post("/auth/login", { usuario, password });
  return response; // { id, nombre, rol }
}
