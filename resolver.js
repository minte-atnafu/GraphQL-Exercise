import { games, authors, reviews} from './data.js'

const resolvers = {
    Query: {
        games (){
            return games
        },
        authors() {
            return authors
        },
        reviews() {
            return reviews
        },
        review(_, {id}) {
            return reviews.find(review => review.id === id) || null;
        },
        game(_, { id }) {
            return games.find(game => game.id === id) || null;
        },
        author(_, { id }) {
            return authors.find(author => author.id === id) || null;
        }
    }
}
export default resolvers;