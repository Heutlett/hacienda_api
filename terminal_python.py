import requests

# Datos del usuario a utilizar

nombre_usuario = "adrian19921"
token = "1"     # Sin implementar

# Datos requeridos para solicitar token
client_id = "api-stag"
username = "cpf-06-0453-0340@stag.comprobanteselectronicos.go.cr"
password = "I7rT>^!5mR^!eS>=mkVB"
grant_type = "password"

# Parametros de la creacion de la clave y consecutivo

sucursal = "1",
punto_venta = "1"
tipo = "1"
numeracion = "58"
codigo_pais = "506"
identificacion = "604530340"
situacion = "1"

# Parametros de fecha requeridos

fecha = "10/02/23"
fecha_emision = "2023-02-10T11:50:00-06:00"


# Parametros para la creacion del XML de una FE

clave = ""          # Se asigna en la marcha
consecutivo = ""    # Se asigna en la marcha
codigo_actividad = "722003"
nombre_emisor = "CARLOS ADRIAN ARAYA RAMIREZ"
tipo_id_emisor = "01"
numero_id_emisor = identificacion
nombre_comercial = "ADRIAN ARAYA"
provincia_emisor = "6"
canton_emisor = "08"
distrito_emisor = "01"
barrio_emisor = "11"
senas_emisor = "PRIMERA ENTRADA SEGUNDA CASA A MANO IZQUIERDA"
codigo_pais_emisor = codigo_pais
telefono_emisor = "88393511"
correo_emisor = "carlosadrian19921@gmail.com"
nombre_receptor = "CAJA COSTARRICENSE DEL SEGURO SOCIAL"
tipo_id_receptor = "02"
numero_id_receptor = "4000042147"
provincia_receptor = "6"
canton_receptor = "04"
distrito_receptor = "01"
senas_receptor = "frente parquecito infantil, centro Miramar"
codigo_pais_receptor = "506"
telefono_receptor = "26399226"
correo_receptor = "suc_miramar@ccss.sa.cr"
codigo_venta = "01"
medio_pago = "04"
codigo_moneda = "CRC"
tipo_cambio = "1"
detalles = [
    {
        "Codigo": "7211200000300",
        "CodigoComercial": {
            "Tipo": "01",
            "Codigo": "01"
        },
        "Cantidad": "1.00",
        "UnidadMedida": "Alc",
        "Detalle": "Alquiler edificio Sucursal CCSS Miramar setiembre 2023",
        "PrecioUnitario": "1050000.00",
        "MontoTotal": "1050000.00",
        "SubTotal": "1050000.00",
        "Impuesto": {
            "Codigo": "01",
            "CodigoTarifa": "01",
            "Tarifa": "0",
            "Monto": "0.00"
        },
        "ImpuestoNeto": "0.00",
        "MontoTotalLinea": "1050000.00"
    }
]
total_serv_gravados = "1050000.00"
total_serv_exentos = "0"
total_serv_exonerado = "0"
total_mercancias_gravadas = "0"
total_mercancias_exentas = "0"
total_merc_exonerada = "0"
total_gravado = "1050000.00"
total_exento = "0"
total_exonerado = "0"
total_venta = "1050000.00"
total_descuentos = "0"
total_venta_neta = "1050000.00"
total_impuesto = "0"
total_IVA_devuelto = "0"
total_comprobante = "1050000.000"

# ---------------------------------------------------------------------------------

# ------------- Creación de clave y consecutivo

query_params = {
    "sucursal": sucursal,
    "punto_venta": punto_venta,
    "tipo": tipo,
    "numeracion": numeracion,
    "codigo_pais": codigo_pais,
    "fecha": fecha,
    "identificacion": identificacion,
    "situacion": situacion
}

response = requests.get(
    "http://localhost:8080/api/generarClaveConsecutivo", params=query_params)

if response.status_code == 200:
    data = response.json()
    clave = data["clave"]
    consecutivo = data["consecutivo"]
    print("\nSe ha generado la clave y consecutivo:")
    print(data)
else:
    print("\nLa solicitud GET generarClaveConsecutivo ha fallado con código de estado:",
          response.status_code)

# ---------------------------------------------------------------------------------

# ------------- Generacion de XML

data = {
    "clave": clave,
    "consecutivo": consecutivo,
    "codigo_actividad": codigo_actividad,
    "fecha_emision": fecha_emision,
    "nombre_emisor": nombre_emisor,
    "tipo_id_emisor": tipo_id_emisor,
    "numero_id_emisor": numero_id_emisor,
    "nombre_comercial": nombre_comercial,
    "provincia_emisor": provincia_emisor,
    "canton_emisor": canton_emisor,
    "distrito_emisor": distrito_emisor,
    "barrio_emisor": barrio_emisor,
    "senas_emisor": senas_emisor,
    "codigo_pais_emisor": codigo_pais_emisor,
    "telefono_emisor": telefono_emisor,
    "correo_emisor": correo_emisor,
    "nombre_receptor": nombre_receptor,
    "tipo_id_receptor": tipo_id_receptor,
    "numero_id_receptor": numero_id_receptor,
    "provincia_receptor": provincia_receptor,
    "canton_receptor": canton_receptor,
    "distrito_receptor": distrito_receptor,
    "senas_receptor": senas_receptor,
    "codigo_pais_receptor": codigo_pais_receptor,
    "telefono_receptor": telefono_receptor,
    "correo_receptor": correo_receptor,
    "codigo_venta": codigo_venta,
    "medio_pago": medio_pago,
    "codigo_moneda": codigo_moneda,
    "tipo_cambio": tipo_cambio,
    "detalles": detalles,
    "total_serv_gravados": total_serv_gravados,
    "total_serv_exentos": total_serv_exentos,
    "total_serv_exonerado": total_serv_exonerado,
    "total_mercancias_gravadas": total_mercancias_gravadas,
    "total_mercancias_exentas": total_mercancias_exentas,
    "total_merc_exonerada": total_merc_exonerada,
    "total_gravado": total_gravado,
    "total_exento": total_exento,
    "total_exonerado": total_exonerado,
    "total_venta": total_venta,
    "total_descuentos": total_descuentos,
    "total_venta_neta": total_venta_neta,
    "total_impuesto": total_impuesto,
    "total_IVA_devuelto": total_IVA_devuelto,
    "total_comprobante": total_comprobante
}

headers = {
    "Content-Type": "application/json"
}

response = requests.get(
    "http://localhost:8080/api/generate_FE_XML_base64", headers=headers, json=data)

if response.status_code == 200:
    data = response.json()
    xml_base64 = data["xmlbase64"]
    print("\nSe ha generado el xml en base64:")
    print(xml_base64[0:10] + "...")
else:
    print("\nLa solicitud GET generate_FE_XML_base64 ha fallado con código de estado:",
          response.status_code)


# ---------------------------------------------------------------------------------

# ------------- Firmar XML


data = {
    "nombre_usuario": nombre_usuario,
    "token": token,
    "xmlbase64": xml_base64
}

response = requests.post(
    "http://localhost:8080/api/firmar_FE_base64", json=data)

if response.status_code == 200:
    data = response.json()
    xml_firmado_base64 = data["xmlbase64"]
    print("\nSe ha firmado correctamente el xml:")
    print(xml_firmado_base64[0:10] + "...")
else:
    print("\nLa solicitud GET firmar_FE_base64 ha fallado con código de estado:",
          response.status_code)


# ---------------------------------------------------------------------------------

# ------------- Generar token


query_params = {
    "client_id": client_id,
    "username": username,
    "password": password,
    "grant_type": grant_type
}

response = requests.get(
    "http://localhost:8080/api/generarToken", params=query_params)

if response.status_code == 200:
    data = response.json()
    accessToken = data["access_token"]
    print("\nSe ha generado el token correctamente:")
    print(accessToken[0:10] + "...")
else:
    print("\nLa solicitud GET generarToken ha fallado con código de estado:",
          response.status_code)

# ---------------------------------------------------------------------------------

# ------------- Enviar a hacienda


data = {
    "clave": clave,
    "fecha": fecha_emision,
    "emisor_identificacion_tipo": tipo_id_emisor,
    "emisor_identificacion_numero": numero_id_emisor,
    "receptor_identificacion_tipo": tipo_id_receptor,
    "receptor_identificacion_numero": numero_id_receptor,
    "accessToken": accessToken,
    "xml": xml_firmado_base64
}

response = requests.post(
    "http://localhost:8080/api/enviar_XML", json=data)

if response.status_code == 200:
    data = response.json()
    print("\nSe ha enviado el comprobante a hacienda correctamente:")
    print(data)
else:
    print("\nLa solicitud GET firmar_FE_base64 ha fallado con código de estado:",
          response.status_code)

# ---------------------------------------------------------------------------------

# ------------- Consultar comprobante


data = {
    "clave": clave,
    "accessToken": accessToken
}

headers = {
    "Content-Type": "application/json"
}


response = requests.get(
    "http://localhost:8080/api/consultar_comprobante", headers=headers, json=data)

if response.status_code == 200:
    data = response.json()
    print("\nSe ha consultado el comprobante correctamente:")
    print(data["ind_estado"])
else:
    print("\nLa solicitud GET consultar_comprobante ha fallado con código de estado:",
          response.status_code)

