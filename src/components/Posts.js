import React from 'react';
import Spinner from './Spinner';

const Posts = ({ loading, posts }) => {

    if( loading ) {
        return <Spinner />
    }

    return (
        <ul className="list-group m-3">
            { posts.map(( post ) => (
                <li key={ post.id } className="list-group-item font-weight-bold">{ post.title }</li>
            )) }
        </ul>
    )
}

export default Posts;
