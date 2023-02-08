<?php
require(dirname(__FILE__) . '/hacienda/firmador.php');

use Hacienda\Firmador;

// $pfx    = 'resources/llave.p12'; // Ruta del archivo de la llave criptográfica (*.p12)
// $pin    = '8912'; // PIN de 4 dígitos de la llave criptográfica
// $xml    = 'resources/unsignedFE.xml'; // String XML ó Ruta del archivo XML (comprobante electrónico)
// $ruta   = 'resources/signedFE.xml'; // Ruta del nuevo arhivo XML cuando se desea guardar en disco

$pfx    = $argv[1]; // Ruta del archivo de la llave criptográfica (*.p12)
$pin    = $argv[2]; // PIN de 4 dígitos de la llave criptográfica
$xml    = $argv[3]; // String XML ó Ruta del archivo XML (comprobante electrónico)
$ruta   = $argv[4]; // Ruta del nuevo arhivo XML cuando se desea guardar en disco

// Nuevo firmador
$firmador = new Firmador();

// Se firma XML y se recibe un string resultado en Base64
$base64 = $firmador->firmarXml($pfx, $pin, $xml, $firmador::TO_BASE64_STRING);
print_r($base64);
//print_r("\n\n");

// Se firma XML y se recibe un string resultado en Xml
//$xml_string = $firmador->firmarXml($pfx, $pin, $xml, $firmador::TO_XML_STRING);
//print_r($xml_string);
//print_r("\n\n");


// Se firma XML, se guarda en disco duro ($ruta) y se recibe el número de bytes del archivo guardado. En caso de error se recibe FALSE
$archivo = $firmador->firmarXml($pfx, $pin, $xml, $firmador::TO_XML_FILE, $ruta);
//print_r($archivo);