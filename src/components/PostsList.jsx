import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from './Home';

function PostsList() {
  const [posts, setPosts] = useState([]); // State to hold posts data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get('https://dummyjson.com/posts');
        console.log('Fetched Posts:', response.data.posts); // Log fetched posts
        setPosts(response.data.posts); // Access posts data from the response
      } catch (err) {
        console.error('Error fetching posts:', err.message); // Log error message
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to fetch only once on mount

  // Render loading, error, or posts data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <Home posts={posts} />
    </div>
  );
}

export default PostsList;
