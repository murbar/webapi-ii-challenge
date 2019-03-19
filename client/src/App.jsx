import React from 'react';
import './App.css';
import usePosts from './usePosts';

const App = () => {
  const { posts, isLoading, error } = usePosts();
  return (
    <main>
      <h1>Blog posts</h1>
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {posts.length ? (
        <div className="posts-list">
          {posts.map(p => (
            <div key={p.id}>
              <h2>{p.title}</h2>
              <p>{p.contents}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No posts</div>
      )}
    </main>
  );
};

export default App;
