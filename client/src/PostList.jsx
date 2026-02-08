import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './ComentList';

export default function PostList({ posts, onCommentCreated }) {
  const renderedPosts = Object.values(posts).map((post) => (
    <div className="col-md-4 mb-4" key={post.id}>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <hr />

          <CommentList comments={post.comments} />
          <CommentCreate
            postId={post.id}
            onCommentCreated={onCommentCreated}
          />
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
