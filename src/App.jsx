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


useEffect(() => {
    fetch("http://127.0.0.1:5555/blog_posts")
    .then(r => r.json())
    .then(setBlogs)
},[])

const addBlogPost = (blogPost) => {
  setBlogs((current) => [...current, blogPost])
}

  return (
    <>
      <Header searchTerm={searchTerm} passNewSearchTermFromHeaderToApp={passNewSearchTermFromHeaderToApp}/>
    <NavBar/>
      <Routes>
      <Route path='/' element={<BlogPage blogs={blogs} searchTerm={searchTerm} users={users} setSearchTerm={setSearchTerm}/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/authentication' element={<Authentication/>}></Route>
      <Route path='/blogPosts/:id' element={<BlogPost users={users} blogs={blogs}/>}></Route>
      <Route path='/newBlogPost' element={<NewBlogForm users={users} blogs={blogs} addBlogPost={addBlogPost}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
