import React from "react";

const PostList = ({ data, loading }) => {
    return (
        <>
            <div>list</div>
            {loading ? (<p>Loading</p>) : (
                <ul>
                    {data && data.map((datum) => 
                        (<li key={datum.id}>{datum.title}</li>)
                    )}
                </ul>
            )}
        </>
    )
};

export default PostList;