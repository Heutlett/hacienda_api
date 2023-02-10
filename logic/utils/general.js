const fs = require('fs');

function convert_b64_to_string(text_base64){
  return Buffer.from(text_base64, "base64").toString("utf-8")
}

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, (error) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  };

module.exports = {writeFile, convert_b64_to_string}