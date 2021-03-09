import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/form-controls/forms-control';
import s from './my-posts.module.css';
import Post from './post'; 


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field name='newPostText' component={ Textarea } placeholder='Post message' 
                    validate={ [required, maxLength10] }/>
            </div>
            <div className={ s.button }>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likes}/>);

    // let newPostElement = React.createRef();
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

       return(
        <div className={ s.myPosts }>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={ onAddPost }/>
            <div className={ s.posts }>
                { postsElements }
            </div>
        </div>
    )
});

export default MyPosts;
    