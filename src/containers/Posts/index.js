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
        {props.posts.map((posts) => {
            return (
                <div className="each-posts-wrapper hoverable"
                    key={posts.id}
                >
                    <div>{posts.title}</div>
                    <div onClick={(e) => {
                        props.history.push('/app/Posts')
                    }}>view description</div>
                </div>)
        })}
    </div>
    )
}

export default withRouter(Posts);