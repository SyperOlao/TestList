import React from "react"
import {connect} from "react-redux";
import {PostElem} from "./Post/PostElem";
import {IPost} from "../Interfaces/IPost";

const PostPage = (props: any): JSX.Element => {
    return (
        <div>
            <ul className={"container-post"}>
                {props.posts.map((post: IPost, i: number)=>
                <PostElem key={`${post.title}_${i}`} post={post}/>)}
            </ul>
        </div>
    );
}
const mapStateToProps = (state: any) => {

    return({
        posts: state.reducer.posts,
    });
}

export default connect(mapStateToProps)(PostPage);