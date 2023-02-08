use `facturacion_db`;
CREATE VIEW view_users_low as
select nombre_usuario,
    rol,
    correo
from usuario