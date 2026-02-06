import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
  return (
    <div className="container mt-4">
      <div className="bg-light p-4 rounded shadow-sm">
        <PostCreate />
        <hr />
        <PostList />
      </div>
    </div>
  );
};

export default App;

