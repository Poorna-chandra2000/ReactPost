import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import nextbutton from '../assets/next (1).png';
import previousbutton from '../assets/previous.png';

const PostDetail = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newid,setnewid]=useState(parseInt(id))

  useEffect(() => {
    const fetchPost = async () => {
        if (newid <= 0 || newid>=236) { //this logic doesnt allow appi to fetch data just return so no errors
            setError("Invalid post ID");
            setLoading(false);
            return;
          }

      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/posts/${newid}`);
        console.log('Fetched Post:', response.data); // Log fetched post
        setPost(response.data); // Access the post object directly
      } catch (err) {
        console.error('Error fetching post:', err.message); // Log error message
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

 

    fetchPost();
  }, [newid]); // Add `id` as a dependency to refetch on id change
//now use newid usestate instead if id which came from param
  return (
    <div className="w-full h-screen bg-violet-950 flex justify-center gap-3 flex-col items-center flex-wrap">
      {loading ? (
        <p className="text-3xl text-white">Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : post ? (
        <div className="p-2 flex flex-col gap-2 text-justify text-white bg-violet-700 w-[30rem] w-10/12 h-fit rounded-md bg-opacity-[20%] border-violet-400 border-2" key={post.id}>
          <h3 className="bg-violet-800 text-center first-letter:uppercase rounded-md shadow-sm shadow-violet-400 font-semibold text-xl">
           {post.id} {post.title}
          </h3>
          <p className="bg-blue-900 bg-opacity-[40%] text-center text-[1.2rem] mt-2 p-1 rounded-md border-4 border-double border-blue-600">
            {post.body}
          </p>
        <img className='backdrop-filter-none ' src={`https://dummyjson.com/image/400x50/282828?fontFamily=pacifico&text=${encodeURIComponent(post.title)}`} alt="" />      
        
        <div className='flex justify-center gap-4 p-2'>
        {
            post.tags.map((tag,i)=>{
               return( 
                <h1 className='text-2xl text-white first-letter:uppercase bg-blue-900 bg-opacity-[40%] text-center text-[1.2rem] mt-2 p-1 rounded-md border-4 border-double border-blue-600' key={i}>{tag}</h1>
               ) 
            })
        }
        </div>
        <div className='flex justify-center gap-4 p-2 flex justify-between items-center'>
                <h3 className='text-xl'>👍<span>{post.reactions.likes}</span></h3>
                <h1 className='text-2xl text-white first-letter:uppercase bg-blue-900 bg-opacity-[40%] text-center text-[1.2rem] mt-2 p-1 rounded-md border-4 border-double border-blue-600'><span>views : </span>{post.views}</h1>
                <h3 className='text-xl'>👎<span>{post.reactions.dislikes}</span></h3>
        </div>
        </div>  
      ) : null}

      <div className='text-2xl text-white flex gap-3'>
      <button className='p-1 flex text-blue-200 font-semibold text-[1.2rem] mx-1 bg-blue-900 border-spacing-7 border-2 px-3 rounded-2xl border-blue-500 gap-1' onClick={()=>setnewid((prev)=>prev-1)} disabled={newid<=1}><img  className='h-10 filter contrast-100 hue-rotate-180 bg-blend-color-burn bg-slate-400 rounded-xl' src={previousbutton} alt="" /> <span>prev</span></button>
        <button className='p-1 flex text-blue-200 font-semibold text-[1.2rem] mx-1 bg-blue-900 border-spacing-7 border-2 px-3 rounded-2xl border-blue-500 gap-1' onClick={()=>setnewid((prev)=>prev+1)} disabled={newid>=235} >next <img className='h-10 filter contrast-100 bg-blend-color-dodge bg-slate-400 rounded-xl'  src={nextbutton} alt="" /></button>
      </div>
    </div>
  );
};

export default PostDetail;
