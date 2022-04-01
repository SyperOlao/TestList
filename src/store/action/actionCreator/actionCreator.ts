import {UPDATE_TITLE} from "../actionType";

export const updateTitle = (event: any, id: string) =>({
    type: UPDATE_TITLE,
    name: event.target.name,
    value: event.target.value,
    id: id,
})