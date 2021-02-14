import React from 'react';
import { withRouter } from 'react-router-dom';
import up from '../../Image/up.svg';
import trash from '../../Image/trash.svg';
import down from '../../Image/down.svg';
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

    const deletePost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.selectedPostId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(response => response.json()).then(data => {
              console.log(data)
              props.history.push('/app/Posts')
          })
    }

    return (
        <>
        <div className="pd-container">
            <div className="pd-header">{post.title}
             <img 
                className="hoverable" 
                height="20px" 
                src={trash}  
                alt="delete" 
                title="Delete this post"
                onClick={deletePost}/>
             </div>
            <div className="pd-body">{post.body}</div>
            <div className="pd-comment hoverable"
                onClick={
                getComments
            }>View Comments ({`${comments.length}`}) <img src={showComment ? up : down} alt="show comments" height="16px"/></div>
        </div>
        {showComment ? <Comments comments={comments}/> : null}
        </>
    )
}

export default withRouter(PostDetails);