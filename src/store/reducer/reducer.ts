import {addPost, deleteElement, generatePost} from "./utils";
import {
    ADD_POST,
    DELETE_ALL_POSTS,
    DELETE_POST,
    INITIALIZATION_POSTS,
    UPDATE_FIELD,
    UPDATE_TITLE
} from "../action/actionType";
import {IPost} from "../../Interfaces/IPost";

const initialState = {
    posts: JSON.parse(localStorage.getItem('posts')!),
    post: {title: '', content: ''}
};

export const reducer = (state = initialState, action: any) =>{
    switch (action.type){
        case UPDATE_TITLE:
            return  {
                ...state,
                posts: state.posts.map((
                    post:IPost)=> post.id === action.id
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

        case INITIALIZATION_POSTS:
            localStorage.setItem('posts', JSON.stringify([...generatePost(20)]));
            return {...state, posts: [...generatePost(20)], post: {title: '', content: ''}}

        case UPDATE_FIELD:
            return {...state, post: {...state.post, [action.name]: action.value}}
        case DELETE_ALL_POSTS:
            localStorage.setItem('posts', JSON.stringify([]));
            return {...state, posts: [], post: {title: '', content: ''}}
        default:
            return state;
    }
}