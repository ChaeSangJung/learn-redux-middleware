import React from "react";

const Post = ({data, loading}) => {    
    return (
        <div>
            {loading ? (<p>Loading...</p>): (
                <>
                    <strong>{data && data.title}</strong>
                    <p>{data && data.body}</p>
                </>
            )}
        </div>
    )
}

export default Post;