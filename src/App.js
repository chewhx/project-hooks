import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Response from "./components/Reponse";
import Calls from "./components/Calls";
import { usePosts } from "./hooks/usePosts";

const App = () => {
  const {
    results,
    message,
    getAllPosts,
    addPost,
    updatePost,
    deletePost,
    errorCall,
    reset,
  } = usePosts("https://jsonplaceholder.typicode.com");

  let callProps = {
    getAllPosts,
    addPost,
    updatePost,
    deletePost,
    errorCall,
    reset,
  };

  let responseProps = {
    results,
    message,
  };
  // const getAllPosts = async () => {
  //   const result = await axios.get(`/posts`);
  //   setRes(result);
  //   setMessage(`Get all posts.`);
  // };

  // const addPost = async () => {
  //   const result = await axios.post(`/posts`);
  //   setRes(result);
  //   setMessage(`Added one new post`);
  // };

  // const updatePost = async (id) => {
  //   const result = await axios.put(`/posts/${id}`);
  //   setRes(result);
  //   setMessage(`Succesfully updated post (id:${id})`);
  // };

  // const deletePost = async (id) => {
  //   const result = await axios.delete(`/posts/${id}`);
  //   setRes(result);
  //   setMessage(`Succesfully deleted post (id:${id})`);
  // };
  return (
    <Container>
      <h1>usePosts() custom hooks</h1>
      <h5>
        built by <a href="https://github.com/chewhx">@chewhx</a>
      </h5>
      <h5>
        see repository <a href="/">here</a>
      </h5>
      <Row>
        <Col md={12} className="mb-3">
          <Calls {...callProps} />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mb-3">
          <Response {...responseProps} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
