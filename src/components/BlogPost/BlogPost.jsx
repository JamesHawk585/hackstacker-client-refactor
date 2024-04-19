import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogSearch from "../BlogSearch/BlogSearch";

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

  const copyOfBlogPostDetails = {...blogPostDetails}


  

  
  useEffect((authorName) => {
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

  // fetch blog post objects
  // Update state with blog post that matches blog.id

  return (
    <div>
      <h1>{blogPostDetails.title}</h1>
      <h2>{authorUsername}</h2>
      <h2>{publicationDate}</h2>
      <h2>{blogContent}</h2>
    </div>
  );
};

export default BlogPost;
