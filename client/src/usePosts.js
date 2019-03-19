import { useState, useEffect } from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:4000/api/posts';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestWrapper = cb => async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      await cb(...args);
      setIsLoading(false);
    } catch (error) {
      console.dir(error);
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };

  const getAllPosts = requestWrapper(async () => {
    const { data } = await axios.get(endpoint);
    setPosts(data);
  });

  useEffect(() => {
    getAllPosts();
  }, []);

  return {
    posts,
    isLoading,
    error,
    getAllPosts
  };
};

export default usePosts;
