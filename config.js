'use strict';

const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER,SQL_INSTANCENAME} = process.env;

const sqlEncrypt = process.env.ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql:{
        host: HOST,
        user: SQL_USER,
        password: SQL_PASSWORD,
        //server: SQL_SERVER,
        database: SQL_DATABASE,
        //options:{
        //        trustServerCertificate:true,
        //        trustedConnection:false,
        //        enableArithAbort: true,
        //        instancename:SQL_INSTANCENAME
        //        },
        //port: 1433,
        }
}