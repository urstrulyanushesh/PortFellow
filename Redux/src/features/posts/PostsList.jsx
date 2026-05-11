import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice"; // ✅ 1. Import User Selector
import React from 'react'
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./Reaction.Buttons";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const users = useSelector(selectAllUsers);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    

    const renderPosts = orderedPosts.map(post => {
        const author = users.find(user => user.id === post.userId);

        return (
            <article key={post.id}>
                <h3>{post.title}</h3>

                <p>{post.content.substring(0, 100)}</p>

               <p className="postCredit">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                  <ReactionButtons post={post} />
            </article>
        )
    })

    return (
        <section> 
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList;