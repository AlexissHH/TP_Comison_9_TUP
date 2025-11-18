import { pool } from "../db.js";

export const login = async (req, res) => {
  const { usuario, password } = req.body;

  console.log("Login attempt:", { usuario, password });

  if (!usuario || !password) {
    return res.status(400).json({ error: "Usuario y password requeridos" });
  }

  try {
    const [rows] = await pool.execute(
      "SELECT id, nombre, rol FROM usuarios WHERE nombre = ? AND password = ?",
      [usuario, password] // Nota: en producción, usar hash
    );

    console.log("Query result:", rows);

    if (rows.length === 0) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const user = rows[0];
    res.json({ id: user.id, nombre: user.nombre, rol: user.rol });
  } catch (err) {
    console.error("Error en login:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};;