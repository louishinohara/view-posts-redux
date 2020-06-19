import * as actions from "../actions/postsActions"; // Imports all the actions from postsActions

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:                                                 // Begins loading
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:                                         // App has posts, no erros, stop loading
      return { posts: action.payload, loading: false, hasErrors: false };
    case actions.GET_POSTS_FAILURE:                                         // App has errors and should stop loading
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
