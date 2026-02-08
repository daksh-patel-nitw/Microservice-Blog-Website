import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="bg-light p-4 rounded shadow-sm">
        <PostCreate onPostCreated={fetchPosts} />
        <hr />
        <PostList posts={posts} onCommentCreated={fetchPosts} />
      </div>
    </div>
  );
};

export default App;
