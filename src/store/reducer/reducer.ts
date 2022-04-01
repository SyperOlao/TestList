import {addPost, deleteElement, generatePost} from "./utils";
import {ADD_POST, DELETE_POST, UPDATE_FIELD, UPDATE_TITLE} from "../action/actionType";

const initialState = {
    posts: generatePost(3),
    post: {title: '', content: ''}
};

export const reducer = (state = initialState, action: any) =>{
    switch (action.type){
        case UPDATE_TITLE:
            return  {
                ...state,
                posts: state.posts.map(
                    post => post.id === action.id
                        ? {
                            ...post,
                            [action.name]: action.value
                        }
                        : post
                ),
            }
        case DELETE_POST:
            return {...state, posts: deleteElement(state.posts, action.id)}

        case ADD_POST:
            return addPost(state);

        case UPDATE_FIELD:
            return {...state, post: {...state.post, [action.name]: action.value}}
        default:
            return state;
    }
}