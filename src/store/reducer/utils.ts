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
                title: generateString(splitLoremText, 3),
                content: generateString(splitLoremText, 10)
            }
        }

        return resultPostArray;
    }
    return [];

}

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