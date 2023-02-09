const { execSync } = require('child_process');

function firmar_FE(
    p12_route,
    p12_pin,
    unsigned_XML_route
) {
    let command =
        "php Firmador/firmar.php " +
        p12_route +
        " " +
        p12_pin +
        " " +
        unsigned_XML_route;


    const output = execSync(command, { encoding: "utf-8" });

    return output;
}

module.exports = { firmar_FE };
