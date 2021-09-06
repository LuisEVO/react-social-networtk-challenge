import postsTypes from "../types/posts.types";

const initialState = {
  posts: []
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsTypes.loading:
      return {
        ...state
      };
    case postsTypes.success:
      return {
        ...state,
        posts: action.payload
      };
    case postsTypes.error:
      return {
        ...state
      };
      
    default:
      return state
  }
}

export default postsReducer;