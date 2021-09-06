import commentsTypes from "../types/comments.types"

export const loadComments = (postId) => {
  return (dispatch) => {
    dispatch(commentsLoading)

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(comments => dispatch(commentsSuccess(postId, comments)))
    .catch(error => dispatch(commentsError(error)))
  }
}


export const commentsLoading = () => {
  return {
    type: commentsTypes.loading,
  }
}

export const commentsSuccess = (postId, comments) => {
  return {
    type: commentsTypes.success,
    payload: {postId, comments}
  }
}

export const commentsError = (error) => {
  return {
    type: commentsTypes.error,
    payload: error
  }
}