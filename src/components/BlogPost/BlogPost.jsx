import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const [blogPostDetails, setBlogPostDetails] = useState({
    publicationDate: "",
    title: "",
    author: "",
    blogContent: "",
    id: null
  }) 
  const [error, setError] = useState(null)

  const params = useParams()

  useEffect(() => {
    fetch(`/blog_posts/${params.id}`)
    .then((r) => r.json())
    .then(console.log)
  }, [])

  // console.log(blogPostDetails)



  // fetch blog post objects
  // Update state with blog post that matches blog.id

  return (
    <div>
      <h1>Blog Post</h1>
      {/* <h2>{blog_content}</h2> */}

    </div>
  );
};

export default BlogPost;
