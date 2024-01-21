import React from 'react';
import Link from "next/link";
import {Post} from "@/app/db/post.model";

const PostsPage = (post: Post) => {
    return <li>
        <div
            className="flex flex-col relative mt-10 h-96 pt-0 pr-30 pb-0 pl-30 content-center items-center">{/*card*/}
            <img src='img/postspage/cloudsWIDE.webp' alt="Post image" className="absolute h-full w-full"/>{/*card-img*/}
            <div
                className="h-72 w-96 -mb-48 bottom-0 pt-2.5 pr-7 pb-2.5 pl-7 overflow-hidden rounded-sm">{/*card-body*/}
                <h5 className="text-center font-semibold">
                    <Link href={'/'}>{post.title}</Link>
                </h5>
                <p className="text-justify">{post.text}</p>
            </div>
        </div>
    </li>
}

export default PostsPage;
