import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  try {
    const [r] = await pool.query("SELECT * FROM clientes ORDER BY id DESC");
    console.log("Clientes obtenidos:", r.length);
    res.json(r);
  } catch (err) {
    console.error("Error obteniendo clientes:", err);
    res.status(500).json({ error: "Error obteniendo clientes" });
  }
};

export const createCliente = async (req, res) => {
  const { nombre, correo, telefono } = req.body;
  try {
    const [r] = await pool.query("INSERT INTO clientes (nombre, email, telefono) VALUES (?,?,?)", [nombre, correo, telefono]);
    const [[nuevo]] = await pool.query("SELECT * FROM clientes WHERE id=?", [r.insertId]);
    res.status(201).json(nuevo);
  } catch (err) {
    console.error("Error creando cliente:", err);
    res.status(500).json({ error: "Error creando cliente" });
  }
};

export const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    // remove related turnos first
    await pool.query("DELETE FROM turnos WHERE cliente_id=?", [id]);
    const [r] = await pool.query("DELETE FROM clientes WHERE id=?", [id]);
    res.json(r.affectedRows ? { ok: true } : { error: "Cliente no encontrado" });
  } catch (err) {
    console.error("Error eliminando cliente:", err);
    res.status(500).json({ error: "Error eliminando cliente" });
  }
};