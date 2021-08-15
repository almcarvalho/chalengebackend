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
    planet: Planeta
  }

  type Query {
    suitablePlanets: [Planeta!]!
    stations: [Station!]!
    getPlaneta(id: ID!): Planeta
  }

  type Mutation {
    criarPlaneta(name: String, mass: Float, hasStation: Boolean!): Planeta!
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
  const stations = await repository.find({
    relations: ["planet"]
  });
  //console.log(stations);
  //const planets = await repository.find({where : {name : "teste"}});
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
    installStation: (parent: any, args: any) => {
    },
  },
  Planeta: {
    name: (parent: any) => parent.pl_name,
    mass: (parent: any) => parent.pl_bmassj,
    hasstation: (parent: any) => hasStationOn(parent.pl_name),
    id: (parent: any) => parent.id
  },
}


