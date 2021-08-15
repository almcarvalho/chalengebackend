import { gql } from 'apollo-server'
import { getRepository } from 'typeorm'
import Planet from './entity/Planet'
import Station from './entity/Station'
import PlanetsAPI from './planetsAPI'


export const typeDefs = gql`
  type Planeta {
    id: ID!
    name: String!
    mass: Float!
    hasstation: Boolean!
  }

  type Station {
    id: ID!
    name: String!
    planet: Planeta!
  }

  type Query {
    suitablePlanets: [Planeta!]!
    stations: [Station!]!
  }

  type Mutation {
    createPlanet(name: String, mass: Float, hasStation: Boolean!): Planeta!
    installStation(planet_name: String) : Planeta!
  }
`

const getAllPlanets = async () => {
  //PLANETAS
  const buscarPlanetas = new PlanetsAPI();
  const retornoApi: Array<Planet> = await buscarPlanetas.suitablePlanets();
  return retornoApi;
}

async function hasStationOn(name_station: string) {

  const repository = getRepository(Station);
  const stations = await repository.find({
    relations: ["planet"],
    where: {
      planet: { name: name_station }
    }
  });

  return (stations.length) ? true : false;
}


const getAllStations = async () => {
  const repository = getRepository(Station);
  const stations: Array<Station> = await repository.find({
    relations: ["planet"]
  });

  console.log(stations);

  return stations;
}


export const resolvers = {
  Query: {
    suitablePlanets: async (parent: any, args: any) => {
      return await getAllPlanets();
    },
    stations: async (parent: any, args: any) => {
      return await getAllStations();
    }
  },
  Mutation: {
    installStation: async (parent: any, args: any) => {
      const { name, planet_id } = args;

      try {
        const stationRepository = getRepository(Station);
        const planetRepository = getRepository(Planet);
        const planet = await planetRepository.update(planet_id, {
          has_station: true
        });
        const station = await stationRepository.save({
          name: name,
          planet_id: planet_id
        });
        return {
          name: station.name,
          id: station.id
        }
      } catch (error) {
        console.log(error)
        return error
      }
    },
    createPlanet: (_: any, args: any) => {
      const { name, mass } = args;

      try {
        const planetRepository = getRepository(Planet);
        const planet = planetRepository.create(
          {
            name,
            mass
          }
        );
        return planetRepository.save(planet);
      } catch (error) {
        console.log(error)
        return error
      }
    },
  },
  Planeta: {
    name: (parent: any) => parent.pl_name,
    mass: (parent: any) => parent.pl_bmassj,
    hasstation: (parent: any) => hasStationOn(parent.pl_name),
    id: (parent: any) => parent.id
  },
}


