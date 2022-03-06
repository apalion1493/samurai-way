import s from './Post.module.css'
import React from "react";

type ContentType = {
    message: string,
    likeCount: number,
    id: number
}

export const Post: React.FC<ContentType> = (props: ContentType) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}/>
            <span>{props.message}</span>
            <span className={s.like}>Like - {props.likeCount}</span>
        </div>
    )
}
