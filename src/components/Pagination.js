import React from 'react';

const Pagination = ({ totalNumberOfPosts, postsPerPage, showPaginatedPosts }) => {
    
    // create an array containing the total number of pages
    var numberOfPages = [];
    for( let i = 1; i <= ( totalNumberOfPosts / postsPerPage); i++ ) {
        numberOfPages.push(i);
    }

    // console.log( totalNumberOfPosts );

    return (
        <ul className="pagination ml-3">
            { numberOfPages.map(( pageNumber ) => (
                <li key={ pageNumber } className="page-item">
                    <a 
                        href="#"
                        className="page-link"
                        onClick={ () => showPaginatedPosts( pageNumber ) }  
                    >{ pageNumber }</a>
                </li>
            )) }
        </ul>
    )
}

export default Pagination;
