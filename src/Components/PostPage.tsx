import React from "react"
import {connect} from "react-redux";
import PostElem from "./Post/PostElem";
import {IPost} from "../Interfaces/IPost";
import CreatePostElem from "./Post/CreatePostElem";
import {deleteAllPosts, initializationPosts} from "../store/action/actionCreator/actionCreator";

const PostPage = (props: any): JSX.Element => {
    return (
        <div className={'main-page'}>
            <div className={'create-post'}>
                <CreatePostElem/>
                <div className={'create-posts__container-buttons'}>
                    <button className={"create-posts__buttons"} type={"button"} onClick={props.initializPosts}>Generate</button>
                    <button className={"create-posts__buttons"} type={"button"} onClick={props.deletePosts}>Delete All</button>
                </div>
            </div>
            {props.posts !== null &&
                <ul className={"container-post"}>
                    {props.posts.map((post: IPost, i: number) =>
                        <PostElem key={`${post.id}_${i}`} post={post}/>)}
                </ul>
            }
        </div>
    );
}
const mapStateToProps = (state: any) => {

    return ({
        posts: state.reducer.posts,
    });
}


const mapDispatchToProps = {
    initializPosts: initializationPosts,
    deletePosts: deleteAllPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);