import commentsTypes from "../types/comments.types";

const initialState = {
  comments: {}
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentsTypes.loading:
      return {
        ...state
      };
    case commentsTypes.success:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: action.payload.comments 
        }
      };
    case commentsTypes.error:
      return {
        ...state
      };
      
    default:
      return state
  }
}

export default commentsReducer;