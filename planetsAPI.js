const { RESTDataSource } = require('apollo-datasource-rest');

class PlanetsAPI extends RESTDataSource {
    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'https://exoplanetarchive.ipac.caltech.edu/TAP/';
    }


    async suitablePlanets() {
        return this.get('sync?query=select+*+from+ps+where+upper(soltype)+like+%27%CONF%%27+and+pl_masse+>+10&format=json');
    }


}

module.exports = PlanetsAPI;