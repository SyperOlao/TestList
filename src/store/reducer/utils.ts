import {IPost} from "../../Interfaces/IPost";


export function generatePost(amountOfPosts: number): IPost[] {
    let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
        " officia deserunt mollit anim id est laborum."

    let splitLoremText: string[] = loremText.split(" ");

    let resultPostArray: IPost[] = [];
    if (amountOfPosts > 0) {
        for (let i = 0; i < amountOfPosts; i++) {
            resultPostArray[i] = {
                id: uuid(),
                title: generateString(splitLoremText, 3),
                content: generateString(splitLoremText, 10)
            }
        }

        return resultPostArray;
    }
    return [];

}

const uuid = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });

function generateString(splitText: string[], stringLength: number): string {
    let resString = "";
    for (let i = 0; i < stringLength; i++) {
        resString += splitText[Math.floor(Math.random() * splitText.length)] + " ";
    }
    return resString;
}


export function isEqual(object1: any, object2: any): boolean {
    let properties1 = Object.getOwnPropertyNames(object1);
    let properties2 = Object.getOwnPropertyNames(object2);
    if (properties1.length !== properties2.length) {
        return false;
    }
    for (let i = 0; i < properties1.length; i++) {
        const prop = properties1[i];
        const isObjects = typeof (object1[prop]) === 'object' && typeof (object2[prop]) === 'object';
        if (!isObjects && object1[prop] !== object2[prop] ||
            isObjects && !isEqual(object1[prop], object2[prop])) {
            return false;
        }
    }
    return true;
}


export const deleteElement = (arr: IPost[], id: string) => {
    let newArr = arr.filter( (post) => post.id !== id )
    localStorage.setItem('posts', JSON.stringify(newArr));
    return newArr;
}


export const addPost = (state: any) => {
    let {title, content} = state.post;

    if (title !== '' && title.trim()) {
        let temp: IPost = {
            id: uuid(),
            title: title,
            content: content,
        };
        if(state.posts!==null) {
            localStorage.setItem('posts', JSON.stringify([...state.posts, temp]));
            return {...state, posts: [...state.posts, temp], post: {title: '', content: ''}}
        }
        localStorage.setItem('posts', JSON.stringify([temp]));
        return {...state, posts: [temp], post: {title: '', content: ''}}
    }
    return state;
}