import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {

  const [posts, setPosts] = useState([]); // State to hold posts data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors
  const [lim,setlim]=useState(100);
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`https://dummyjson.com/posts?limit=${lim}`);
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
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;


  return (
    <div className='max-w-full max-h-full bg-violet-950 flex justify-center gap-3 flex-wrap pt-20 pb-20'>
      {/* <h1 className='font-extrabold text-purple-100 text-[4rem]'>Hello!..</h1>
      <h1 className='font-extrabold text-purple-100 text-[5rem]'>Router Dom</h1> */}
  
     {
     
     (loading) ?  <p className='text-3xl text-white'>Loading...</p> : (error) ? <p>Error: {error}</p> : 
     posts.map((post) => (
      <NavLink to={`/posts/${post.id}`} key={post.id}>
            <div className='p-2 text-justify text-white bg-violet-700 w-[30rem] h-fit rounded-md bg-opacity-[20%] border-violet-400 border-2' key={post.id}>
            <h3 className='bg-violet-800 text-center first-letter:uppercase rounded-md shadow-sm shadow-violet-400 font-thin'><span className='bg-violet-900 p-1 text-left rounded-md shadow-sm shadow-violet-300 border-spacing-2 border-2'>Title:</span><> </>{post.title}</h3>
            <p className='bg-blue-900 bg-opacity-[40%] text-center text-sm mt-2 p-1 rounded-md border-4 border-double border-blue-600'>{post.body}</p>
          </div>
      </NavLink>
   
        ))
      }


    </div>
  )
}

export default Home
