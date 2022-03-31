import React, {useState} from "react";
import {IPost} from "../../Interfaces/IPost";


export const PostElem = (props: any): JSX.Element => {
    let {title, content} = props.post;
    const [postValue, setValue] = useState<IPost>({
        title: title,
        content: content,
    });

    const onChange = (e: any): void => setValue({...postValue, [e.target.name]: e.target.value});

    return (
        <li className={"container-post__elem"}>
            <div className="container-post__title">
                <input className={"container-post__input"} onChange={onChange} name={'title'}
                       value={postValue.title}/>
            </div>
            <p className={"container-post__content"}>{content}</p>
        </li>
    );
}

