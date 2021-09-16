import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ data, loading }) => {
    return (
        <>
            {loading ? (<p>Loading</p>) : (
                <>
                    <div>list</div>
                    <ul>
                        {data && data.map((datum) => 
                            (<li key={datum.id}><Link to={`/postlist/${datum.id}`}>{datum.title}</Link></li>)
                        )}
                    </ul>
                </>
            )}
        </>
    )
};

export default PostList;