const { ApolloServer } = require('apollo-server')
const { resolvers, typeDefs } = require('./schema') //busca no meu database local os planetas, estações, recargas, usuários e reservas

const port = process.env.PORT || 4000

//load planets from json

new ApolloServer({ resolvers, typeDefs }).listen({ port }, () =>
    console.log(`My app is running on: http://localhost:${port}`),
)