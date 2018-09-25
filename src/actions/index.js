import axios from 'axios';

const FETCH_POSTS = 'FETCH_POSTS';
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const FETCH_POST_ID = 'FETCH_POST_ID';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=230275770';

const fetchPosts = () => {
  const req = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: req
  }
};

const createPost = (post, callback) => {
  const req = axios.post(`${BASE_URL}/posts${API_KEY}`, post)
  .then(() => callback());
  return {
    type: CREATE_POST,
    payload: req
  }
}

const fetchPost = (id) => {
  const req = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST_ID,
    payload: req
  }
};

const deletePost = (id, callback) => {
  const req = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`)
  .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
}

export {
  FETCH_POSTS,
  FETCH_POST_ID,
  DELETE_POST,
  fetchPosts,
  fetchPost,
  createPost,
  deletePost
}
