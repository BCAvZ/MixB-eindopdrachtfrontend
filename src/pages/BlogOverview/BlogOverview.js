import React from 'react';
import {NavLink} from "react-router-dom";
import posts from '../../data/posts.json'

export function BlogOverview() {
    let stars = '🌟';

    //     Json format template new blog:
    //     "Name":
    //     "Date":,
    //     "Review":
    //     "Recipe difficulty":,
    //     "History":
    //     "Stars":

    return (
        <div>
            <h1>See here all {posts.length} blogs!</h1>
            {posts.map((post) => {
            return <NavLink key={post.Id} to={`/Blog/${post.Id}`} ><ul><li>{post.Date} {post.Name} {stars.repeat(post.Stars)}</li></ul></NavLink>
             })}

        </div>
    );
}
