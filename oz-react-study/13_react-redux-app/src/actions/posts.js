import axios from "axios";

// export const fetchPosts  = () => {
//     return async function fetchPostsThunk(dispatch, getState){

//         const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(resp)
//         dispatch({type: 'FETCH_POSTS', payload: resp.data})
//     }
// }

export const fetchPosts  = () => async function fetchPostsThunk(dispatch, getState){ //es6 문법버전 위에랑 똑같음
        
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(resp)
        dispatch({type: 'FETCH_POSTS', payload: resp.data})
    }


