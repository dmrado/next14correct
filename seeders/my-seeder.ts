import {Post} from "@/app/db/post.model";
const posts = [
    {
        // id: 1,
        title: 'Title Post-1111',
        text: 'Text Post-111, Text Post-1, Text Post-1,Text Post-1',
        // createdAt: new Date(),
        // updatedAt: new Date(),
    },
    {
        // id: 2,
        title: 'Title Post-2',
        text: 'Text Post-2, Text Post-2, Text Post-2,Text Post-2, Text Post-2,Text Post-2',
        // createdAt: new Date(),
        // updatedAt: new Date(),
    },
    {
        // id: 3,
        title: 'Title Post-3',
        text: 'some text',
        // createdAt: new Date(),
        // updatedAt: new Date(),
    },
    {
        // id: 4,
        title: 'Title Post-4',
        text: 'llam et saepe reiciendis voluptatem adipisciunt voluptatem rerum illo velits',
        // createdAt: new Date(),
        // updatedAt: new Date(),
    },
    {
        title: 'Title Post-5',
        text: 'llam et saepe reiciendis voluptatem adipiscsunt voluptatem rerum illo velits',
        // createdAt: new Date(),
        // updatedAt: new Date(),
    },
]

const seedPost = async ()=>{
    for (const post of posts){
        await Post.create(post)
    }
}

// const seedPost = async ()=>{
//     await Post.bulkCreate(posts)
// }

await seedPost()