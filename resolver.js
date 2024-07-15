import { books, games, reviews } from './data.js';
const resolvers = {
    Query: {
        books: () => books,
        games: () => games,
        reviews:() => reviews,
    },
}
export default resolvers;