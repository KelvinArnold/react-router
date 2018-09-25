import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST_ID, DELETE_POST } from './../actions';

const ReducerPosts = (state = {}, action) => {
  switch (action.type) {
  case FETCH_POSTS:
    const data =action.payload.data;
    return _.mapKeys(data, 'id');
  case FETCH_POST_ID:
    const post = action.payload.data;
    return {
      ...state,
      [post.id]: post
    };
  case DELETE_POST:
    return _.omit(state, action.payload);
  default:
    return state;
  }
}

export default ReducerPosts;
