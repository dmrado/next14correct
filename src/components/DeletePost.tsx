'use client'
import {Post} from '@/app/db/post.model.ts';
import {sequelize} from "@/app/db/connection.ts";
import {QueryInterface} from "sequelize";

const queryInterface: QueryInterface = sequelize.getQueryInterface();

function DeletePost({ post }: { post: Post }): JSX.Element {
    const {id} = post
    console.log('id удаляемого поста', id)

    const removePost = async (id: any) => {
        await queryInterface.bulkDelete('posts', {where: {id}}, {}).then((): void => {
        });
    };

    return (
        <div>
            <button onClick={c => removePost}>Удалить</button>
        </div>
    );
}
export default DeletePost;