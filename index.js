const { ApolloServer, gql } = require('apollo-server');
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