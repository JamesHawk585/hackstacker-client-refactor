import React from "react";
import BlogCard from "../BlogCard/BlogCard.jsx";
import { container } from "react-bootstrap";
import "./BlogList.css";

function BlogList({ blogs, users, passBlogFromBlogPageToApp }) {
  const {
    usernames,
    allUserBlogPosts,
    allUserComments,
    allUserBios,
    allUserIds,
  } = users;

  const passBlogFromBlogListToBlogPage = (blog) => {
    passBlogFromBlogPageToApp(blog)
    console.log(blog)
  }

  const bList = blogs.map((blog) => {
    const matchingUser = users.find((user) => user.id === blog.user_id);
    // console.log("matchingUser: ", matchingUser);
    return (
      <BlogCard key={blog.id} blog={blog} user={matchingUser} passBlogFromBlogListToBlogPage={passBlogFromBlogListToBlogPage}/>
    );
  });


  return <ul className="cards">{bList}</ul>;
}

export default BlogList;
