import React from 'react';
import Paginator from '../common/paginator/paginator';
import User from './user';


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    const pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
        
    let pages = [];
    for (let i=1; i <= pagesCount; i++ ) {
        pages.push(i);
    }

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            
            <div>
                { users.map( u => <User user={ u }
                                        followingInProgress={ props.followingInProgress }
                                        key={ u.id }
                                        unfollow={ props.unfollow }
                                        follow={ props.follow }/>
                )}
            </div>
       </div>
    )
}


export default Users;