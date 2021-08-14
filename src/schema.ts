import { gql } from 'apollo-server'
import { getRepository } from 'typeorm'
import Planet from './entity/Planet'
import Station from './entity/Station'

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
  const repository = getRepository(Planet);
  const planets = await repository.find();
  //const planets = await repository.find({where : {name : "teste"}});
  return planets;
}


// const stations = [
//     {
//         id: 1,
//         name: 'My Station',
//         planeta: {
//             id: 1,
//             name: 'Marte',
//             mass: 12.5,
//             hasStation: false,
//         },
//     },
// ]


const getAllStations = async () => {
  const repository = getRepository(Station);
  const stations = await repository.find({
    relations: ["planet"]
  });
  console.log(stations);
  //const planets = await repository.find({where : {name : "teste"}});
  return stations;
}



export const resolvers = {
  Query: {
    suitablePlanets: async (parent: any, args: any) => {
      return await getAllPlanets()
    },
    stations: async (parent: any, args: any) => {
      return await getAllStations();
    }
  },
  Mutation: {
    criarPlaneta: (parent: any, args: any) => {
      // planetas.push({
      //     id: planetas.length + 1,
      //     name: args.name,
      //     mass: args.mass,
      //     hasStation: false,
      // })
      // return planetas[planetas.length - 1]
    },
  },
  Planeta: {
    name: (parent: any) => parent.name,
    id: (parent: any) => parent.id
  },
}


