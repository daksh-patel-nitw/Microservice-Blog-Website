import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './ComentList';

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div className="col-md-4 mb-4" key={post.id}>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <hr />

          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <div className="row">{renderedPosts}</div>
    </div>
  );
}
