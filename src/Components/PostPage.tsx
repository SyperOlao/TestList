import React from "react"
import {connect} from "react-redux";
import PostElem from "./Post/PostElem";
import {IPost} from "../Interfaces/IPost";
import CreatePostElem from "./Post/CreatePostElem";

const PostPage = (props: any): JSX.Element => {
    console.log(props.posts);
    return (
        <div>
            <CreatePostElem />

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

    return({
        posts: state.reducer.posts,
    });
}

export default connect(mapStateToProps)(PostPage);