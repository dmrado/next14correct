import { Post, PostPreview } from '../db/post.model'
import PaginateWrapper from '@/components/PaginateWrapper.js'
import React from 'react'
import { getServerSession } from 'next-auth'

const Posts = async () => {
    const session = await getServerSession()

    // todo: 1. When fetching posts, fetch only title and preview (not text, which can be pretty heavy)
    // todo: 2. Implement pagination or infinite scroll
    const posts = await Post.findAll({ order: [ [ 'updatedAt', 'DESC' ] ],
        attributes: [ 'id', 'title', 'preview', 'createdAt' ]
    })
        .then(res => res.map(post => post.toJSON()))
        .catch(e => console.error(e))

    return (
        <main className="flex min-h-screen flex-col items-center justify-between sm:pl-2 sm:pr-2">
            <div className='max-w-4xl overflow-hidden mt-0 mr-auto mb-0 ml-auto italic'>{/*container*/}
                <div className="flex flex-col justify-center content-center items-center mt-40">{/*blog-header*/}
                    <img src="img/postspage/blog1.webp" alt="Photo" className="h-60 w-60 rounded-full mb-10"/>

                    <h1 className='opacity-70'>Блог пастора</h1>
                    <p className='mt-6 px-4 indent-12 opacity-70'>Некий эпиграф к блогу Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Amet aspernatur commodi consequatur deleniti dignissimos dolor enim ex
                        excepturi facilis harum id illo ipsum laborum laudantium magnam maiores modi molestias natus
                        necessitatibus odit quam quia quod repellendus, reprehenderit saepe sit tempora tenetur ut,
                        velit voluptatibus. Ab accusantium ad atque consequatur ea ex illo illum laudantium nesciunt!</p>

                </div>
            </div>

            <div className='max-w-2xl overflow-hidden mt-0 mr-auto mb-0 ml-auto'>{/*container*/}
                <div className='flex float-left p-0 mt-9'>{/*card-list*/}

                    <ul>
                        <PaginateWrapper posts={posts}/>
                        {/*{posts.map(post => PostsPreview(post))}*/}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Posts
