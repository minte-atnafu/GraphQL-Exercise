const typeDefs = `
  type Book {
  title:String
  author:String
  }
  type Game{
   name:String
   platform:[String]
   verified:Boolean
  }
   type Reviews{
   id:ID
   rating:Int
   content:String
   book:Book
   game:Game
   }
   type Query {
     reviews:[Reviews]
     books:[Book]
     games:[Game]
   }

`;
export default typeDefs;