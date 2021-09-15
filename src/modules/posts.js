import * as postsApi from "../api/posts";
import { 
    createPromiseThunk, 
    reducerUtils ,
    handleAsyncAction
} from "../lib/asyncUtils";

// action type
// 포스트 여러개 조회
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCESS = "GET_POSTS_SUCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

// 포스트 하나 조회
const GET_POST = "GET_POST";
const GET_POST_SUCESS = "GET_POST_SUCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// thunk
// export const getPosts = () => async dispatch => {
//     dispatch({ type: GET_POSTS });
//     try {
//         const posts = await postsApi.getPosts();
//         dispatch({ type: GET_POSTS_SUCESS, posts });
//     } catch(e) {
//         dispatch({ type: GET_POSTS_ERROR, error: e });
//     }
// };
export const getPosts = createPromiseThunk(GET_POSTS, postsApi.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsApi.getPostById);

const initialState = {
    posts : reducerUtils.initial(),
    post : reducerUtils.initial()
};

const posts = (state=initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCESS:
        case GET_POSTS_ERROR:
            return handleAsyncAction(GET_POSTS, "posts")(state, action);
        case GET_POST:
        case GET_POST_SUCESS:
        case GET_POST_ERROR:
            const postReducer = handleAsyncAction(GET_POST, "post");
            return postReducer(state, action);
        default:
            return state;
    }
}

// const posts = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_POSTS :
//             return {
//                 ...state,
//                 // posts: {
//                 //     loading: true,
//                 //     data: null,
//                 //     error: null
//                 // }
//                 posts : reducerUtils.loading()
//             };
//         case GET_POSTS_SUCESS:
//             return {
//                 ...state,
//                 posts: reducerUtils.suceess(action.payload)
//             };
//         case GET_POSTS_ERROR:
//             return {
//                 ...state,
//                 posts: reducerUtils.error(action.error)
//             };
//         case GET_POST:
//             return {
//                 ...state,
//                 posts : reducerUtils.loading()
//             };
//         case GET_POST_SUCESS:
//             return {
//                 ...state,
//                 posts: reducerUtils.suceess(action.payload)
//             }
//         case GET_POST_ERROR:
//             return {
//                 ...state,
//                 posts: reducerUtils.error(action.error)
//             };
//         default:
//             return state;
//     }
// };

export default posts;