-- Crear base de datos
CREATE DATABASE IF NOT EXISTS peluqueria;
USE peluqueria;

-- Tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol ENUM('admin', 'empleado') DEFAULT 'empleado'
);

-- Tabla clientes
CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(255)
);

-- Tabla servicios
CREATE TABLE IF NOT EXISTS servicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2),
  duracion_minutos INT
);

-- Tabla turnos
CREATE TABLE IF NOT EXISTS turnos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  servicio_id INT,
  inicio DATETIME NOT NULL,
  fin DATETIME,
  estado ENUM('pendiente', 'hecho', 'cancelado') DEFAULT 'pendiente',
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (servicio_id) REFERENCES servicios(id)
);

-- Insertar datos de prueba
INSERT INTO usuarios (nombre, password, rol) VALUES
('admin', '1234', 'admin'),
('empleado', '1234', 'empleado');

INSERT INTO clientes (nombre, telefono, email) VALUES
('Juan Pérez', '123456789', 'juan@example.com'),
('María García', '987654321', 'maria@example.com');

INSERT INTO servicios (nombre, precio, duracion_minutos) VALUES
('Corte de cabello', 20.00, 30),
('Tinte', 50.00, 60),
('Lavado', 10.00, 15);