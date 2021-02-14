import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss'

const Posts = props => {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?' + `userId=${props.selectedUserId}&skip=${0}&limit=${10}`)
            .then(response => response.json()).then(data => { props.setUserPosts(data) })
    }, [])

    return (
        <div className="posts-container">
            {props.posts.map((post) => {
            let search = post.title.toUpperCase();
            if (search.includes(props.searchTerm.toUpperCase())) 
                {
                return (
                    <div className="each-posts-wrapper hoverable"
                        key={post.id}
                    >
                        <div>{post.title}</div>
                        <div onClick={(e) => {
                            props.setSelectedPostId(post.id)
                            props.history.push('/app/PostDetails')
                        }}>view description</div>
                    </div>)
                }
            })}
        </div>
    )
}

export default withRouter(Posts);