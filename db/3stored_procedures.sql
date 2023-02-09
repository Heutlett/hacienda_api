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
        pinP12,
        correo
    )
VALUES
    (
        _nombre_usuario,
        _password,
        1,
        "",
        _correo
    );

END $ $ DELIMITER ;
use `facturacion_db`;
DELIMITER $ $ 
CREATE PROCEDURE getUserByNombreUsuario(IN _nombre_usuario varchar(30)) BEGIN
SELECT
    *
FROM
    facturacion_db.view_users_low
where
    nombre_usuario = _nombre_usuario;

END $ $ DELIMITER ;


DELIMITER $ $ 
CREATE PROCEDURE subirLlaveUsuario(IN _nombre_usuario varchar(30),IN _pinp12 varchar(10)) BEGIN

UPDATE `facturacion_db`.`usuario`
SET
`pinP12` = _pinp12
WHERE `nombre_usuario` = _nombre_usuario;

END $ $ DELIMITER ;


DELIMITER $ $ 
CREATE PROCEDURE getPinp12(IN _nombre_usuario varchar(30)) BEGIN
SELECT
    (pinP12)
FROM
    facturacion_db.usuario
where
    nombre_usuario = _nombre_usuario;

END $ $ DELIMITER ;
