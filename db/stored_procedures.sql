DELIMITER $ $ 
CREATE PROCEDURE getAllUsers() BEGIN
SELECT
    *
FROM
    facturacion_db.view_users_low;

END $ $ DELIMITER;

DELIMITER $ $ 
CREATE PROCEDURE createUser(
    IN _nombre_usuario varchar(30),
    IN _password varchar(30),
    IN _correo varchar(100)
) BEGIN
INSERT INTO
    facturacion_db.usuario(
        nombre_usuario,
        password,
        rol,
        llaveP12,
        pinP12,
        correo
    )
VALUES
    (
        _nombre_usuario,
        _password,DELIMITER $ $ 
CREATE PROCEDURE getAllUsers() BEGIN
SELECT
    *
FROM
    facturacion_db.view_users_low;

END $ $ DELIMITER;

DELIMITER $ $ 
CREATE PROCEDURE createUser(
    IN _nombre_usuario varchar(30),
    IN _password varchar(30),
    IN _correo varchar(100)
) BEGIN
INSERT INTO
    facturacion_db.usuario(
        nombre_usuario,
        password,
        rol,
        llaveP12,
        pinP12,
        correo
    )
VALUES
    (
        _nombre_usuario,
        _password,
        1,
        "",
        "",
        _correo
    );

END $ $ DELIMITER ;

DELIMITER $ $ 
CREATE PROCEDURE getUserByNombreUsuario(IN _nombre_usuario varchar(30)) BEGIN
SELECT
    *
FROM
    facturacion_db.view_users_low
where
    nombre_usuario = _nombre_usuario;

END $ $ DELIMITER ;
        1,
        "",
        "",
        _correo
    );

END $ $ DELIMITER ;

DELIMITER $ $ 
CREATE PROCEDURE getUserByNombreUsuario(IN _nombre_usuario varchar(30)) BEGIN
SELECT
    *
FROM
    facturacion_db.view_users_low
where
    nombre_usuario = _nombre_usuario;

END $ $ DELIMITER ;