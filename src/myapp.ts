require('reflect-metadata')
require('./database')
import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema' //busca no meu database local os planetas, estações, recargas, usuários e reservas


const port = process.env.PORT || 4000

//connect to database



new ApolloServer({ resolvers, typeDefs }).listen({ port }, () =>
    console.log(`My app is running on: http://localhost:${port}`),
)