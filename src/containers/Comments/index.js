import React from 'react';
import './style.scss'

const Comments = props => {
    return (
        <div className="comment-container">
            {props.comments.map((comment) => {
                return (
                    <div className="each-comment-wrapper hoverable"
                        key={comment.id}
                    >
                        <div>{comment.body}</div>
                    </div>)
            })}
        </div>
    )
}

export default Comments;