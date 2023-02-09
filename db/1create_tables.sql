drop database `facturacion_db`;
CREATE DATABASE `facturacion_db`;
use `facturacion_db`;

CREATE TABLE `usuario` (
    id INT AUTO_INCREMENT,
    rol INT NOT NULL,
    nombre_usuario VARCHAR(30),
    password VARCHAR(30),
    pinP12 VARCHAR(10),
    correo VARCHAR(100),
    PRIMARY KEY(id)
);
CREATE TABLE `historial` (
    id INT AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    identificacion_emisor VARCHAR(20),
    identificacion_receptor VARCHAR(20),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_factura INT NULL,
    clave VARCHAR(50),
    PRIMARY KEY(id),
    CONSTRAINT fk_usuario FOREIGN KEY(id_usuario) REFERENCES usuario(id)
);
