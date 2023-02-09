const fs = require('fs');

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

module.exports = {writeFile}