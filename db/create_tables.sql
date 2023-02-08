CREATE DATABASE `facturacion_db`;
CREATE TABLE `usuario` (
    id INT AUTO_INCREMENT,
    rol INT NOT NULL,
    nombre_usuario VARCHAR(30),
    password VARCHAR(30),
    llaveP12 VARCHAR(50000),
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
CREATE VIEW view_users_low as
select nombre_usuario,
    rol,
    correo
from usuario