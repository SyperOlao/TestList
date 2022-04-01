import React from "react";
import {connect} from "react-redux";
import {deletePost, updateTitle} from "../../store/action/actionCreator/actionCreator";


const PostElem = (props: any): JSX.Element => {
    let {id, title, content} = props.post;

    return (
        <li className={"container-post__elem container-post__elem_position"}>
            <div className="container-post__title">
                <span className={"container-post__text"}>title:</span>
                <input className={"container-post__input"} onChange={(e)=>props.update(e, id)} name={'title'}
                       value={title}/>
                <div className={"container-post__delete"} onClick={()=>props.deleteCurrentPost(id)}>Delete</div>
            </div>
            <span className={"container-post__text"}>content:</span>
            <p className={"container-post__content"}>{content}</p>

        </li>
    );
}

const mapDispatchToProps = {
    update: updateTitle,
    deleteCurrentPost: deletePost,
}

export default connect(null, mapDispatchToProps)(PostElem);

