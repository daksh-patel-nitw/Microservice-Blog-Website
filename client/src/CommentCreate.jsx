import React, { useState } from 'react';
import axios from 'axios';

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };

  return (
    <form onSubmit={onSubmit} className="mt-3">
      <div className="mb-2">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control form-control-sm"
          placeholder="Add a comment"
        />
      </div>

      <button className="btn btn-sm btn-primary">Submit</button>
    </form>
  );
}
