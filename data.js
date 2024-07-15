export const games= [
    {
        name: "car race",
        platform: ["p55", "xbox"],
        verified:true
    },
    {
        name: "Horse ride",
        platform: ["ps", "plastaion"],
        verified:false
    },
    {
        name: "duck",
        platform: ["ps", "disk"],
        verified:true
    },
]

export const books = [
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
export const reviews = [
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
