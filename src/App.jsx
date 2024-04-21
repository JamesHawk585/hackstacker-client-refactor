import "./App.css";
import Header from "./components/Header/Header.jsx";
import BlogPage from "./components/BlogPage/BlogPage.jsx";
import Profile from "./components/Profile/Profile.jsx";
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar.jsx";
import Authentication from "./components/Authentication/Authentication.jsx";
import BlogPost from "./components/BlogPost/BlogPost.jsx";
import NewBlogForm from "./components/NewBlogForm/NewBlogForm.jsx";

function App() {
  const [blogs, setBlogs] = useState([])
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


useEffect(() => {
  fetch(`http://127.0.0.1:5555/users`)
  .then(r => r.json())
  .then(setUsers)
}, []);

const passNewSearchTermFromHeaderToApp = (newSearchTerm) => {
  setSearchTerm(newSearchTerm)
}




  // 1. grab the user_id from blogs array of objects
  // 2. Make a fetch request to "/users" by user_id. Return the username associated with the user_id 
  // 3. pass username down to blog card. Append Author name to dom in blog card 

// user_id is passed to BlogList via the blogs 
// Create a fetch request in BlogList that will get the username from the users table and append the username to BlogCard.js
useEffect(() => {
    fetch("http://127.0.0.1:5555/blog_posts")
    .then(r => r.json())
    .then(setBlogs)
},[])

const recieveBlogFromBlogPage = (blog) => {
  console.log(blog)
  return blog
}

recieveBlogFromBlogPage()

  return (
    <>
      <Header searchTerm={searchTerm} passNewSearchTermFromHeaderToApp={passNewSearchTermFromHeaderToApp}/>
    <NavBar/>
      <Routes>
      <Route path='/' element={<BlogPage blogs={blogs} searchTerm={searchTerm} users={users} setSearchTerm={setSearchTerm} recieveBlogFromBlogPage={recieveBlogFromBlogPage}/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/authentication' element={<Authentication/>}></Route>
      <Route path='/BlogPost/:id' element={<BlogPost users={users} blogs={blogs}/>}></Route>
      <Route path='/newBlogPost' element={<NewBlogForm users={users} blogs={blogs}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
