import profileReducer, { addPostActionCreator } from './profile-reducer';
import ReactDOM from 'react';
import App from '../../src/components/app/app';
import React from 'react';

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('this is post text');
    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likes: 15 },
            { id: 2, message: 'It\'s my first post', likes: 20 },
            { id: 3, message: 'Dada', likes: 21 },
            { id: 4, message: 'Blabla', likes: 6 }
          ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});