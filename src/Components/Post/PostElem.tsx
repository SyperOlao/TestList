import React from "react";
import {connect} from "react-redux";
import {deletePost, updateTitle} from "../../store/action/actionCreator/actionCreator";


const PostElem = (props: any): JSX.Element => {
    let {id, title, content} = props.post;

    return (
        <li className={"container-post__elem"}>
            <div className="container-post__title">
                <input className={"container-post__input"} onChange={(e)=>props.update(e, id)} name={'title'}
                       value={title}/>
                <div className={"container-post__delete"} onClick={()=>props.deleteCurrentPost(id)}>Delete</div>
            </div>
            <p className={"container-post__content"}>{content}</p>

        </li>
    );
}

const mapDispatchToProps = {
    update: updateTitle,
    deleteCurrentPost: deletePost,
}

export default connect(null, mapDispatchToProps)(PostElem);

