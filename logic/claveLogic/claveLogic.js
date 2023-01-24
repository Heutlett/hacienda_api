'use strict';
const claveData = require('../../data/claveData/claveData');

/**
 * @description Funtion thats requests all seasons to the data layer
 * @returns All the seasons in the database
 */
const getHola = async () => {
    return claveData.getHola();
}

module.exports = {
    getHola
}