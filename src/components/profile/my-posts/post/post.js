import React from 'react';
import s from './post.module.css';

const Post = (props) => {

    return(
        <div className={ s.item }>
            <img src='https://i.pinimg.com/474x/79/6e/c6/796ec6ea849885284691e9656b9cea33.jpg' alt='avatar'></img>
            { props.message }
            <div>
                <span>likes: </span> { props.likesCount }
            </div>
        </div>
    )
};

export default Post;
    