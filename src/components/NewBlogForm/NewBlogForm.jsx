import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button'

const NewBlogForm = ({ blogs, users }) => {
  const [formData, setFormData] = useState({
    title: "",
    bog_content: "",
  });

  function handleChange(e) {
    if (e.target.value === "title") {
      setFormData({ ...formData, title: e.target.value });
    } else {
      if (e.target.value === "blog_content") {
        setFormData({ ...formData, blog_content: e.target.value });
      }
    }
  }

  function handleSubmit(e){
    e.preventDefault()

    const congifObj = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    }
    fetch("/blog_posts")
    .then(r => r.json())
    .then(console.log)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Title"
        className="mb-3"
        onChange={handleChange}
      >
        <Form.Control as="textarea" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Tell your story..." onChange={handleChange}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "1000px" }}
        />
      </FloatingLabel>
      <Button variant="dark" type="submit">Publish</Button>
      </form>
    </>
  );
};

export default NewBlogForm;
