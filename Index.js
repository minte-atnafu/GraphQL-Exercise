import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Define your schema
const typeDefs = `
  type Book {
    title: String
    author: String
  }
  type Game{
     name:String
     platform: [String]
  }
 type Reviews{
    id: Int
    rating: Int
    content:String
    book:Book
    game:Game
 }
  
  type Query {
    reviews:[Reviews]
    books: [Book]
    games:[Game]
  }
`;

// Sample data
const games= [
    {
        name: "car race",
        platform: ["p55","xbox"],
    },
    {
        name: "Horse ride",
        platform:["ps","plastaion"]
    },
    {
        name: "duck",
        platform:["ps","disk"]
    },
]

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
      },
    {
       title: 'ፍቅር እስከ መቃብር።',
       author: 'ሃዲስ አለማየው',
    },
  ];
const reviews = [
    {
        id: 2,
        rating: 9,
        content: "lorem",
        book: books[0],
        game:games[0]
    },
    {
        id: 1,
        rating: 10,
        content: "Lorem ipsum 2",
        book: books[1],
        game:games[1]
    },
    {
        id: 3,
        rating: 7,
        content: "Story",
        book: books[2],
        game:games[2]
    },
    {
        id: 4,
        rating: 8,
        content: "story",
        book: books[1],
        game:games[0]
    }
]

// Define resolvers
const resolvers = {
  Query: {
        books: () => books,
        games:() => games,
        reviews:() => reviews,
    },
    // Reviews: {
        
    //     book:(parent)=>parent.book,
    // },
};

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the standalone server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
