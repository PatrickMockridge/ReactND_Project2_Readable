import uuid from 'uuid';
import axios from 'axios'

const ROOT_URL = "http://localhost:5001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token) {
    token = localStorage.token = Math.random().toString(10)
  }

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    axios.get(`${ROOT_URL}/categories`, { headers })
        //.then(res => res.json())
        .then(res => res.data.categories)


export const getPosts = () =>
    axios.get(`${ROOT_URL}/posts`, { headers })
        .then(posts => posts.data.filter(post => !post.deleted))

export const getPostsByCategory = (category) =>
    axios.get(`${ROOT_URL}/${category}/posts`, { headers })
        .then(res => res.data)

export const createPost = (post) =>
    axios.post(`${ROOT_URL}/posts`, {
      data: {
          ...post,
          id: uuid(),
          timestamp: Date.now()
        }
      },
      {
      headers: {
          ...headers,
          'Content-Type': 'application/json'
      }
    }).then(res => res.data)

export const editPost = ({id, title, body}) =>
    axios.put(`${ROOT_URL}/posts/${id}`, {
        headers: headers,
        body: JSON.stringify({
            title,
            body,
            timestamp: Date.now()
        })
    }).then(res => res.json())

export const deletePost = (id) =>
    axios.delete(`${ROOT_URL}/posts/${id}`, { headers })

export const getPost = (id) =>
    axios.get(`${ROOT_URL}/posts/${id}`, { headers })
        .then(res => res.json())

export const votePost = (id, option) =>
    axios.post(`${ROOT_URL}/posts/${id}`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            option
        })
    }).then(res => res.json())

export const voteComment = (id, option) =>
    axios.post(`${ROOT_URL}/comments/${id}`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            option
        })
    }).then(res => res.json())

export const getComments = (postId) =>
    axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers })
        .then(res => res.json())

export const createComment = (comment) =>
    axios.post(`${ROOT_URL}/comments`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            ...comment,
            id: uuid(),
            timestamp: Date.now()
        })
    }).then(res => res.json())

export const editComment = (id, body) =>
    axios.put(`${ROOT_URL}/comments/${id}`, {
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            body,
            timestamp: Date.now()
        })
    }).then(res => res.json())

export const deleteComment = (id) =>
    axios.delete(`${ROOT_URL}/comments/${id}`, { headers })