import React from 'react';
import Link from "next/link";
import moment from "moment";

const _PostsPage = ({
                       item,
                       link,
                       // updateHandler,
                       // deleteHandler,
                       postPicture,
                       // setEditedPost,
                   }) => {
    const {userId, id, title, text, updatedAt} = item
    // console.log('link', link, 'item', item)

    return (<>
            <div className="card">
                    <img className="card__img" src={postPicture} alt="Post_picture"/>

                    <div className="card__body">
                        <h5 className="card__title">
                            <Link className="card__link" href={link}>Пост {id}</Link>
                        </h5>
                        <p className="card__post-data">{moment(updatedAt).format("DD.MM.YYYY")}</p>
                        <h3 className="card__title"><b>{title.slice(0, 55)}...</b></h3>
                        <p className="text">{text.slice(0, 100)}...</p>
                    </div>
            </div>
        </>
    );
};

export default _PostsPage;
