import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../modules/posts";
import PostList from "./PostList";

const PostListContainer = () => {
    const { posts : { posts : { data, error, loading } } } = useSelector(state => state);
    const dispatch = useDispatch();
    
    // API 재로딩 문제 해결하기 -1
    // useEffect(()=>{
    //     if (data) return
    //     dispatch(getPosts());
    // },[data, dispatch]);

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    
    return (
        error ? 
            <p>error</p>
            : <PostList data={data} loading={loading} />
    )
};

export default PostListContainer;