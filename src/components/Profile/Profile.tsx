import s from "./Profile.module.css";
import MyPosts, {PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile: React.FC<PostsType> = (props: PostsType) => {
    return (
        <section className={s.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText} posts={props.posts} postText={props.postText}/>
        </section>
    )
}

export default Profile
