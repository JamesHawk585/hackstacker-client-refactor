import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const NewBlogForm = ({ blogs, users }) => {
  const [formData, setFormData] = useState({
    title: "",
    blog_content: "",
  });

  function handleChange(e) {
    if (e.target.name === "title") {
      setFormData({ ...formData, title: e.target.value });
    } else {
      if (e.target.name === "blog_content") {
        setFormData({ ...formData, blog_content: e.target.value });
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch("/blog_posts", configObj)
      .then((r) => r.json())
      .then((data) => console.log(data));
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="blog-title-section"
          label="Title"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
        </FloatingLabel>
        <FloatingLabel controlId="blog-content-section" label="Tell your story...">
          <Form.Control
            as="textarea"
            name="blog_content"
            placeholder="Leave a comment here"
            style={{ height: "1000px" }}
            value={formData.blog_content}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Button variant="dark" type="submit">
          Publish
        </Button>
      </form>
    </>
  );
};

export default NewBlogForm;
