import postsTypes from "../types/posts.types";

const initialState = {
  loading: false,
  posts: [],
  error: undefined
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsTypes.loading:
      return {
        loading: true,
        posts: [],
        error: undefined
      };
    case postsTypes.success:
      return {
        loading: false,
        posts: action.payload.posts,
        error: undefined
      };
    case postsTypes.error:
      return {
        loading: false,
        posts: [],
        error: action.payload.error
      };
      
    default:
      return state
  }
}

export default postsReducer;