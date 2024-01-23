import React from 'react';
import Link from "next/link";
import {Post} from "@/app/db/post.model";
import moment from "moment";

const PostsPage = (post: Post) => {
    return <li>

        <div className="flex flex-col mt-20 h-full pt-0 pr-30 pb-0 pl-30 content-center items-center">{/*card*/}

            <div className="overflow-hidden h-full">{/*card wrapper для эффекта hover-scale картинки*/}
                <img className="transform hover:scale-150 ease-in-out duration-700 w-full h-fit" src='img/postspage/cloudsWIDE.webp' alt="Post image"/>{/*card-img*/}
            </div>

            <div
                className="flex flex-col h-52 sm:h-60 w-96 md:w-[24rem] min-h-40 -mt-4 sm:-mt-24 z-10 bottom-0 pt-2.5 pr-7 pb-2 pl-7 overflow-hidden bg-indigo-50 rounded-lg">{/*card-body*/}
                <h5 className="text-center text-blue-950 font-semibold mt-8 mb-8">
                    <Link className="hover:text-orange-500 transform hover:scale-150 ease-in-out duration-300 text-2xl" href={`/posts/${post.id}`}>{post.title}</Link>
                </h5>
                <p className="text-justify text-blue-950">{post.text.slice(0, 100)}...</p>

                {/*<p className="text-end text-blue-950">{moment(updatedAt).format("DD.MM.YYYY")}</p>*/}
                <p className="text-end text-blue-950 bottom-4 italic">Дата публикации</p>
            </div>

        </div>

    </li>
}

export default PostsPage;
