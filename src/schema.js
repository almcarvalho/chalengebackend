const { gql } = require('apollo-server')

const typeDefs = gql`
  type Planeta {
    id: ID!
    name: String!
    mass: Float!
    hasStation: Boolean!
  }

  type Query {
    suitablePlanets: [Planeta!]!
    getPlaneta(id: ID!): Planeta
  }

  type Mutation {
    criarPlaneta(name: String, mass: Float, hasStation: Boolean!): Planeta!
  }
`

const planetas = [
    {
        id: 1,
        name: 'Marte',
        mass: 12.5,
        hasStation: false,
    },
    {
        id: 2,
        name: 'Saturno e',
        mass: 99.5,
        hasStation: false,
    }
]



const resolvers = {
    Query: {
        suitablePlanets: (parent, args) => {
            return planetas.filter((planetas) => planetas.id)
        }
    },
    Mutation: {
        criarPlaneta: (parent, args) => {
            planetas.push({
                id: planetas.length + 1,
                name: args.name,
                mass: args.mass,
                hasStation: false,
            })
            return planetas[planetas.length - 1]
        },
    },
    Planeta: {
        name: (parent) => parent.name,
        id: (parent) => parent.id
    },
}


module.exports = {
    resolvers,
    typeDefs,
}