import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, clearPost } from "../modules/posts";
import Post from "./Post";

const PostContainer = ({match}) => {
    const {posts : {post : { loading, data, error }}} = useSelector(state => state);
    const dispatch = useDispatch();

    const { params : { id } } = match;
    const postId = parseInt(id);
    
    useEffect(()=>{
        dispatch(getPost(postId));
        return () => {
            dispatch(clearPost());
        }
    },[dispatch, postId]);
    
    return (
        error ? <div>error</div> : <Post data={data} loading={loading} />
    )
}

export default PostContainer