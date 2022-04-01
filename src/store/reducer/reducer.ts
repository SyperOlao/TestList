import {generatePost} from "./utils";
import {UPDATE_TITLE} from "../action/actionType";

const initialState = {
    posts: generatePost(3),
};

export const reducer = (state = initialState, action: any) =>{
    switch (action.type){
        case UPDATE_TITLE:
            console.log(action.value)
            console.log(action.name)
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

        default:
            return state;
    }
}