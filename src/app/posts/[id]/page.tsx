import {Post} from '../../db/post.model'
import Link from "next/link"
// import {revalidatePath} from "next/cache"

type PostPageParams = { params: { id: number }}
const PostPage = async ({ params }: PostPageParams) => {
    //todo как делается обработка ошибок здесь?
    // try {
    const post = await Post.findByPk(params.id)
    // if (!post) {
    // revalidatePath('/404')
    // }
    // } catch (error) {
    //     console.log(error)
    // }

    if (post === null){
        // todo: return 404 status
        return <>Not found</>
    }

    return (<>
            <div className="p-5 flex flex-col justify-center items-center text-justify">
                <h5 className="p-5">Post id: {post.id}</h5>
                <h1 className="p-5">{post.title}</h1>
                <p className="p-5">{post.text}</p>

                <div className="mb-10 p-10">
                    <Link href={`/posts`}>
                        <button
                            className="bg-main-blue hover:bg-hov-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Вернуться
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default PostPage;