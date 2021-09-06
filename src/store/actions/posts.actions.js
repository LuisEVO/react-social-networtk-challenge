import postsTypes from "../types/posts.types"

export const loadPosts = () => {
  return (dispatch) => {
    dispatch(postsLoading)

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch(postsSuccess(posts)))
    .catch(error => dispatch(postsError(error)))
  }
}

export const postsLoading = () => {
  return {
    type: postsTypes.loading,
  }
}

export const postsSuccess = (posts) => {
  return {
    type: postsTypes.success,
    payload: posts
  }
}

export const postsError = (error) => {
  return {
    type: postsTypes.error,
    payload: error
  }
}