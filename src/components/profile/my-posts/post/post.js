import React from 'react';
import './post.css';

const Post = (props) => {

    return(
        <div className='item container'>
            <div>
                <div className='row'>
                    <img src='https://i.pinimg.com/474x/79/6e/c6/796ec6ea849885284691e9656b9cea33.jpg' alt='avatar' className='col-1'></img>
                    <div className='post-message col-4'>
                        { props.message }
                    </div>
                    <div className='col-7'></div>
                </div>
            </div>
            <div className='post-likes'>
                <span>likes: </span> { props.likesCount }
            </div>
        </div>
    )
};

export default Post;
    