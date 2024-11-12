import { GraphQLServer } from 'graphql-yoga'

// Type definition (schema)
const  typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`
// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query!' 
        },
        name() {
            return 'Soren Essen'
        },
        location() {
            return 'Off da 495'
        },
        bio() {
            return "I'm a little teapot"
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() =>{
    console.log('The server is up!')
})










// import myCurrentLocation, { getGreeting, message, name} from './myModule'
// import myAddFunction, {subtract} from './math.js'
// console.log(myAddFunction(1, -2))
// console.log(subtract(10, 2))
// console.log(message)
// console.log(name)
// console.log(myCurrentLocation)
// console.log(getGreeting('Jessica'))