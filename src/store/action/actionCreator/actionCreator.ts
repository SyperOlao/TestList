import {ADD_POST, DELETE_ALL_POSTS, DELETE_POST, INITIALIZATION_POSTS, UPDATE_FIELD, UPDATE_TITLE} from "../actionType";

export const updateTitle = (event: any, id: string) => ({
    type: UPDATE_TITLE,
    name: event.target.name,
    value: event.target.value,
    id: id,
});

export const deletePost = (id: string) => ({
    type: DELETE_POST,
    id: id,
});

export const updateField = (event: any) => ({
    type: UPDATE_FIELD,
    name: event.target.name,
    value: event.target.value,
})

export const addPost = () =>({
    type: ADD_POST,
});

export const initializationPosts = () =>({
    type:INITIALIZATION_POSTS,
})

export const deleteAllPosts = () =>({
    type: DELETE_ALL_POSTS
})