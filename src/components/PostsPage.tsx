import React from 'react';
import Link from "next/link";
import {Post} from "@/app/db/post.model";

const PostsPage = (post: Post) => {
    return <>
        <div className="grid gap-y-2.5 content-center items-center mt-40">{/*blog-header*/}
            <img src="img/postspage/blog1.webp" alt="Photo" className="h-44 w-full rounded-full"/>
            {/*<Link href='/posts/new'>*/}
            <h1>Блог пастора</h1>
            {/*</Link>*/}
        </div>

        <div className="max-w-5xl overflow-hidden max-w-1 mt-0 mr-auto mb-0 ml-auto">{/*container*/}
            <div className="grid grid-cols-2 gap-x-7 gap-x-64 p-0 mb-52">{/*card-list*/}
                {/*todo после map карточеко отсюда забрать их в отдельный компонент */}
                <div
                    className="flex flex-col relative h-96 pt-0 pr-30 pb-0 pl-30 content-center items-center">{/*card*/}
                    <img src='img/postspage/blog1.webp' alt="Post image" className="absolute h-full w-full"/>{/*card-img*/}
                    <div className="h-72 w-96 -mb-48 bottom-0 pt-2.5 pr-7 pb-2.5 pl-7 overflow-hidden rounded-sm">{/*card-body*/}
                        <h5 className="text-center font-semibold">
                            <Link href={'/'}>{post.title}</Link>
                        </h5>
                        <p className="text-justify">Здесь будет текст поста</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PostsPage;
