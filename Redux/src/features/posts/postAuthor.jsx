import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import React from 'react';

// ✅ Capitalize the name: PostAuthor
const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers) || [];
    
    // Using == is fine here since IDs might be string vs number, 
    // but .find() is safer with the || [] you added.
    const author = users.find(user => user.id === userId);

    return (
        // ✅ Added a space after "by" for better spacing
        <span className="postCredit">
            by {author ? author.name : 'Unknown author'}
        </span>
    );
};

export default PostAuthor;

// import { useSelector } from "react-redux";
// import { selectAllUsers } from "../users/usersSlice";
// import React from 'react';


// const PostAuthor = ({ userId }) => {
//     const users = useSelector(selectAllUsers) || [];
//     const author = users.find(user => user.id === userId);

//     return (
//         <span>by {author ? author.name : 'Unknown author'}</span>
//     );
// };

// export default PostAuthor;