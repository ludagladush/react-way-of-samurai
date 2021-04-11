import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/form-controls/forms-control';
import './my-posts.css';
import Post from './post'; 


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field name='newPostText' component={ Textarea } placeholder='Post message' 
                    validate={ [required, maxLength10] }/>
            </div>
            <div className='button'>
                <button className='btn btn-primary'>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likes} />);

    // let newPostElement = React.createRef();
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

       return(
        <div className='myPosts'>
        <div className='hd-inp'>
            <h2 className='mp-header'>My Posts</h2>
            <div className='form-group'>
                <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Whrite your post</label>
                <AddNewPostFormRedux onSubmit={ onAddPost } className='mp-input' id="inputLarge" type="text"/>
            </div>
        </div>
            <div className='posts'>
                { postsElements }
            </div>
        </div>
    )
});

export default MyPosts;
    