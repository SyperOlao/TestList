import React from "react";
import {connect} from "react-redux";
import {addPost, updateField} from "../../store/action/actionCreator/actionCreator";

const CreatePostElem =  (props: any): JSX.Element => {
   let {title, content} = props.post

    return (
        <li className={"container-post__elem"}>
            <h1>Create post!</h1>
            <div className="container-post__title">
                <span>title:</span>
                <input className={"container-post__input"} onChange={(e)=>props.update(e)} name={'title'}
                       value={title}/>
            </div>
            <p className={"container-post__content"}>
                <span>Content:</span>
                <input className={"container-post__input"} onChange={(e)=>props.update(e)} name={'content'}
                       value={content}/>
            </p>
            <div className={"container-post__create"} onClick={props.addNewPost}>Create</div>
        </li>
    );
}

const mapDispatchToProps = {
    update: updateField,
    addNewPost:addPost,

}

const mapStateToProps = (state: any) => {
  return{
      post: state.reducer.post,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePostElem);