
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Navbar from './component/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);

  const [readTime, setReadTime] = useState(0);


  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked,blog])
  };

  const handleReadingTime = (time, id) => {
    const newTime = readTime + time;
    setReadTime(newTime);
    handleRemoveBookMark(id)
  }

  const handleRemoveBookMark = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !==id);
    setBookmarked(remainingBookMark)
  }


  return (
    <>

      <Navbar></Navbar>
      
      <div className="main-container flex text-center mt-5">
        <div className="left-container w-[70%]">
        <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
        </div>

        <div className="right-container w-[30%]">
          <h1 className='text-xl font-medium'>Reading time : {readTime} </h1>
          <h1 className='text-xl font-medium'>Bookmarked Count : {bookmarked.length} </h1> <br /> <hr /> <br />
          
          {
            bookmarked.map((marked)=> <p key={marked.id} className='p-2 border border-emerald-200 bg-gray-50 m-3 rounded-xl shadow-md'>{marked.title}</p>)
          }
        </div>
        
      </div>

    </>
  )
}

export default App
