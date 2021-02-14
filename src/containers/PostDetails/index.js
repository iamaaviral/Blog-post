import React from 'react';
import { withRouter } from 'react-router-dom';
import Comments from '../Comments';

import './style.scss'

const PostDetails = props => {
    const [post, setPost] = React.useState({})
    const [showComment, setShowComment] = React.useState(false)
    const [comments, setComments] = React.useState([])

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.selectedPostId}`)
        .then(response => response.json()).then(data => {
            setComments(data);
        })

        let post = props.posts.find(post => post.id === props.selectedPostId)
        setPost(post)
    }, [props])

    const getComments = () => {
    setShowComment(!showComment)
}
    return (
        <>
        <div className="pd-container">
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div onClick={
                getComments
            }>view Comments ({`${comments.length}`})</div>
        </div>
        {showComment ? <Comments comments={comments}/> : null}
        </>
    )
}

export default withRouter(PostDetails);