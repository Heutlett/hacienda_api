'use strict';

/**
 * @description Executes the necesary sql query for getting all the seasons
 * @returns Database response
 */
const getHola = async () => {
    try {
        return "hola"
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getHola
}