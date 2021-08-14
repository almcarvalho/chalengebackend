import { createConnection } from 'typeorm';
import Planet from '../entity/Planet';
import Station from '../entity/Station';

createConnection({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "root",
    "database": "postgres",
    "synchronize": false,
    "entities": [
        Planet, Station
    ]
}).then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err);
});