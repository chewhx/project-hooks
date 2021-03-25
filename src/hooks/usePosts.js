import { useState } from "react";
import axios from "axios";

export const usePosts = (baseURL) => {
  const [results, setResults] = useState();
  const [message, setMessage] = useState();
  axios.defaults.baseURL = baseURL;

  //  1. Get all posts
  const getAllPosts = async () => {
    try {
      const res = await axios.get(`/posts`);
      setResults(res);
      setMessage(`Get all posts`);
    } catch (error) {
      console.log(error.response);
      setResults({ status: error.response.status });
      setMessage(`Error`);
    }
  };

  //  2. Add one post

  const addPost = async () => {
    try {
      const res = await axios.post(`/posts`);
      setResults(res);
      setMessage(`Added one new post`);
    } catch (error) {
      setResults({ status: error.response.status });
      setMessage(`Error adding new post`);
    }
  };

  //  3. Update a post

  const updatePost = async (id, input) => {
    try {
      const res = await axios.put(`posts/${id}`, input);
      setResults(res);
      setMessage(`Successfullly updated post (id:${id})`);
    } catch (error) {
      setResults({ status: error.response.status });
      setMessage(`Error updating post (id: ${id})`);
    }
  };

  //  4. Delete a post

  const deletePost = async (id) => {
    try {
      const res = await axios.put(`/posts/${id}`);
      setResults(res);
      setMessage(`Successfullly deleted post (id:${id})`);
    } catch (error) {
      setResults({ status: error.response.status });
      setMessage(`Error deleting post (id:${id})`);
    }
  };

  //  5. Error request to show red alert message

  const errorCall = async () => {
    try {
      const res = await axios.put(`/po`);
      setResults(res);
      setMessage(`...`);
    } catch (error) {
      setResults({ status: error.response.status });
      setMessage(`Error call`);
    }
  };

  //  6. Reset results and message
  const reset = () => {
    setResults();
    setMessage();
  };
  return {
    results,
    message,
    getAllPosts,
    addPost,
    updatePost,
    deletePost,
    errorCall,
    reset,
  };
};
