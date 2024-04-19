import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BlogPost from "../BlogPost/BlogPost";
import "./BlogCard.css";
import { Navigate, useNavigate, Link } from "react-router-dom";

function BlogCard({ blog, user, passBlogFromBlogListToBlogPage }) {
  const navigate = useNavigate();
  const { blogPostUserId, blogPostId, title, blog_content, publication_date } =
    blog;
  
  const [showPost, setShowPost] = useState(false);
  let contentArray = Array.isArray(blog_content)
    ? blog_content
    : [blog_content];

  function handleClick(e) {
    setShowPost((prevShowPost) => !showPost);
    navigate("/BlogPost");
  }


  return (
    <>
      <Card className="blogcard" id={blog.id}>
        <Card.Body>
          <Link to={`BlogPost/${blog.id}`}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Publication Date: {publication_date} </Card.Text>
            <Card.Text id="authorName">{`Author: ${
              user ? user.username : "Anonymous"
            }`}</Card.Text>
            <Card.Text className="blogcontent">
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>
      {/* <BlogPost blog_content={blog_content}/> */}
    </>
  );
}

export default BlogCard;
