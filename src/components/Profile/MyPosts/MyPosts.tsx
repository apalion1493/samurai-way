import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import React from "react";

export type PostsType = {
    posts: Array<PostType>
    addPost?: () => void
    updateNewPostText?: (newText: string) => void
    postText: string
}

export type PostType = {
    id: number
    like: number
    message: string
}

const MyPosts: React.FC<PostsType> = (props) => {
    let postElements = props.posts.map((p: PostType) => <Post id={p.id} likeCount={p.like} message={p.message}/>);

    let newPostElement: any = React.createRef();

    let addPost = () => {
        if (newPostElement.current.value.trim() !== '') {
            if (props.addPost) {
                props.addPost()
            }
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        if (props.updateNewPostText) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div>
            <h3 className={s.title}>My Posts</h3>
            <div className={s.wrapper}>
                <textarea ref={newPostElement} onChange={onPostChange} className={s.textarea} value={props.postText} placeholder="your news..."/>
                <button onClick={addPost} className={s.button}>Send</button>
            </div>
            <div className={s.postList}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts
