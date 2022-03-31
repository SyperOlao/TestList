import {IPost} from "../../Interfaces/IPost";
import {generatePost} from "./utils";

const initialState = {
    posts: generatePost(3),
};

export const reducer = (state = initialState, action: any) =>{
    const {type, payload} = action;
    switch (type){


        default:
            return state;
    }
}