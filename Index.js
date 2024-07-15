(async () => {
    const { EventEmitter } = await import('events');
    EventEmitter.defaultMaxListeners = 20;
  })();
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './Schema.js';
import resolvers from './resolver.js';


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the standalone server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
