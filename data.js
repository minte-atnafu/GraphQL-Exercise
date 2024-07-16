export let games = [
    { id: '1', title: 'zelds, Tears of the kingdom', platform: ['Switch'] },
{ id: '2', title: 'Final Fantasy 7 Remake', platform: ['pss', 'Xbox'] },
{ id: '3', title: 'Elden king', platform: ['pss', 'Xbox', 'pc'] },
{ id: '4', title: 'mario kart', platform: ['Switch'] },
{id:'5', title:'pokemon', platform:['pss','Xbox','pc']},
]

export let authors = [
    { id: '1', name: 'mario', verified: true },
    { id: '2', name: 'yoshi', verified: false },
    {id:'3', name:'peach', verified:true},
]

export let reviews = [
    { id: "1", rating: 9, content: "bla", author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: "bla", author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: "bla", author_id: '3', game_id: '3' },
    { id: '4', rating: 5, content: "bla", author_id: '2', game_id: '4' },
    { id: '5', rating: 8, content: "bla", author_id: '2', game_id:'5'},
]
