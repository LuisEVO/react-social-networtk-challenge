import commentsTypes from "../types/comments.types";

const initialState = {
  posts: {}
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentsTypes.loading:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.postId]: {
            loading: true,
            comments: [],
            error: undefined
          } 
        }
      };
    case commentsTypes.success:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.postId]: {
            loading: false,
            comments: action.payload.comments,
            error: undefined
          }
        }
      };
    case commentsTypes.error:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.postId]: {
            loading: false,
            comments: [],
            error: action.payload.error
          }
        }
      };
      
    default:
      return state
  }
}

export default commentsReducer;