export const commentSelector = (state, postId) => {
  if (postId in state.comments.posts) {
    return state.comments.posts[postId];
  }

  return {
    loading: false,
    comments: [],
    error: undefined
  }
}