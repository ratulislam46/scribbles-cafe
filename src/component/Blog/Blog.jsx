
import React from 'react';
import { BsBookmarksFill } from "react-icons/bs";

const Blog = ({blog, handleBookMark, handleReadingTime}) => {
    // console.log(handleBookMark)
    // console.log(blog.blog)
    // console.log(blog)
    return (
        <div className='m-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover} 
      alt="Shoes" />
  </figure>

  <div className='flex justify-around items-center m-2'>
    <h1 className='text-2xl font-bold'> {blog.author} </h1>
    <img className='w-12' src={blog.author_img} alt="" />

    <BsBookmarksFill onClick={()=>handleBookMark(blog)} size={24} />

  </div>

  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

    <div className='flex'>
      {
        blog.hashtags.map((has)=> <p key={has}>{has}</p> )
      }
    </div>

    <div className="card-actions justify-end">
      <button onClick={() => handleReadingTime(blog.reading_time, blog.id)} className="btn btn-primary">Mark as Read</button>
    </div>
  </div>
</div>
        </div>
    );
};     

export default Blog;    