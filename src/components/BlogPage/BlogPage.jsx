import React, { useState, useEffect } from "react";
// import BlogSearch from './BlogSearch'
import BlogList from "../BlogList/BlogList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// When Usestate relies on fetched data, Usestate must be initialized in the same component as the fetch request.
// Controlled components are componenets whose stateful features are controlled by a state object in a parent component.

function BlogPage({ blogs, users, searchTerm }) {
  console.log(blogs);
  console.log(searchTerm)

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      {/* <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
      <BlogList blogs={filteredBlogs} users={users} />
    </main>
  );
}

export default BlogPage;
