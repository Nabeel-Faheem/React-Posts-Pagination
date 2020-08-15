import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';

const App = () => {

  // defining initial state
  const [ posts, setPosts ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(5);
  const [ loading, setLoading ] = useState(false);

  // useEffect
  useEffect(() => {

    const getPosts = async () => {
      // set loading to true
      setLoading(true);
      // fetch the posts
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
      // set loading to false posts have been fetched at this stage
      setLoading(false);
      setPosts(res.data);

    }
    // call getPosts() async function
    getPosts();

  }, []);

  // calculate the current 10 posts and push them in the state
  const indexOfLastPost = currentPage * postsPerPage ;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const required_posts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  // handler
  const showPaginatedPosts = ( pageNumber ) => {
    setCurrentPage( pageNumber );
  }


  // return
  return (
    <div className="container mt-5 text-underline">
      <h1 className="text-primary mx-3">Posts Pagination</h1>
      <Posts 
        posts={ required_posts }
        loading={ loading }
      />
      <Pagination 
        totalNumberOfPosts={ posts.length }
        postsPerPage={ postsPerPage }
        showPaginatedPosts={ showPaginatedPosts }
      />
    </div>
  );
}

export default App;
