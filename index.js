const { ApolloServer, gql } = require('apollo-server');
//busca an api da nasa os planetas ideais (suitable) //não está configurado para iniciar no package.json (APP INICIA COM MYAPP.JS)
const PlanetsAPI = require("./planetsAPI");





const resolvers = {
  Query: {
    planets: async (_, __, { dataSources }) => {
      return dataSources.planetsAPI.suitablePlanets();
    },
  },
};


const typeDefs = gql`
  type Planet {
    pl_name: String
    pl_bmassj: String
  }

  #example
  type Query {
    planets: [Planet]
  }
`;



const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      planetsAPI: new PlanetsAPI()
    };
  }
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});