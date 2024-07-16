(async () => {
    const { EventEmitter } = await import('events');
    EventEmitter.defaultMaxListeners = 20;
  })();
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';

//the schema
import typeDefs from './Schema.js'
import resolvers from './resolver.js'
//set up appollo server
const server = new ApolloServer({
  //typeDefs are the definotion of different types of data
  typeDefs,
  resolvers // are functions used to featch data
})

const { url } = await startStandaloneServer(server, {
  listen: {port:4000}
})

console.log('Appollo server is ready', 4000);