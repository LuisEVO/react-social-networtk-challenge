import axios from "axios"
import postsTypes from "../types/posts.types"

export const loadPosts = () => {
  return (dispatch) => {
    dispatch(postsLoading)

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch(postsSuccess(res.data)))
    .catch(error => dispatch(postsError(error)))
  }
}

export const postsLoading = {
  type: postsTypes.loading
}

export const postsSuccess = (posts) => {
  return {
    type: postsTypes.success,
    payload: { posts }
  }
}

export const postsError = (error) => {
  return {
    type: postsTypes.error,
    payload: { error }
  }
}