import React from "react";
import { Button } from "react-bootstrap";
import { usePosts } from "../hooks/usePosts";

const Calls = ({
  getAllPosts,
  addPost,
  updatePost,
  deletePost,
  errorCall,
  reset,
}) => {
  return (
    <>
      <Button className="mr-3" variant="primary" onClick={() => getAllPosts()}>
        GET ALL
      </Button>
      <Button className="mr-3" variant="info" onClick={() => addPost()}>
        ADD ONE
      </Button>
      <Button className="mr-3" variant="info" onClick={() => updatePost(5, {})}>
        UPDATE ONE
      </Button>
      <Button className="mr-3" variant="info" onClick={() => deletePost(3)}>
        DELETE ONE
      </Button>
      <Button className="mr-3" variant="danger" onClick={() => errorCall()}>
        ERROR CALL
      </Button>
      <Button className="mr-3" variant="warning" onClick={() => reset()}>
        RESET
      </Button>
    </>
  );
};

export default Calls;
