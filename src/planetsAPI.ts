import { RESTDataSource } from 'apollo-datasource-rest';
import { DataSourceConfig } from 'apollo-datasource';

export default class PlanetsAPI extends RESTDataSource {

    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'https://exoplanetarchive.ipac.caltech.edu/TAP/';

        this.initialize({} as DataSourceConfig<any>);

    }


    async suitablePlanets() {
        return await this.get('sync?query=select+*+from+ps+where+upper(soltype)+like+%27%CONF%%27+and+pl_bmassj+>+10&format=json');
    }

}

