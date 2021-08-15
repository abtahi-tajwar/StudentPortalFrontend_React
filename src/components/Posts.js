import React from 'react';
import Post from './sub-components/Post'

const Posts = () => {
    return (
        <React.Fragment>
            {/* <!-- POST --> */}
            <Post
                title="10 Kids Unaware of Their Halloween Costume"
                excerpt="It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative."
                avatar="images/avatar.jpg" 
                total_comments="560"
                views="1680"
                time="24 min"
            />           

        </React.Fragment>
    );
}

export default Posts;
