import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogSearch from "../BlogSearch/BlogSearch";
import { Card } from "react-bootstrap";

const BlogPost = ({ users, blogs }) => {
  const params = useParams();
  const [blogPostDetails, setBlogPostDetails] = useState({
    publicationDate: "",
    title: "",
    author: "",
    blogContent: "",
    id: `${params.id}`,
  });
  const [error, setError] = useState(null);
  const [authorUsername, setAuthorUsername] = useState("")

  useEffect(() => {
    if (users && blogPostDetails.user_id) {
        const blogAuthor = users.find((user) => user.id === blogPostDetails.user_id);
        if (blogAuthor) {
          console.log(blogAuthor)
          setAuthorUsername(blogAuthor.username)
        } 
      }
    }, [users, blogPostDetails.user_id]);
  
    const authorName= (blogAuthor) => {
      return blogAuthor.username
    }


  useEffect(() => {
    fetch(`http://127.0.0.1:5555/blog_posts/${params.id}`)
      .then((r) => r.json())
      .then((data) => setBlogPostDetails(data));
  }, []);

  let blogContent = blogPostDetails.blog_content;
  let publicationDate = blogPostDetails.publication_date;

  return (
    <Card className="blog-card">
      <Card.Body>
        <Card.Title>{blogPostDetails.title}</Card.Title>
        <Card.Text>{authorUsername}</Card.Text>
        <Card.Text>{publicationDate}</Card.Text>
        <Card.Text>{blogContent}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogPost;
