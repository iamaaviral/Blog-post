import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss'

const Home = props => {
    return (
        <div className="user-container">
            {props.user.map((user) => {
                return (
                    <div className="each-user-wrapper hoverable"
                        key={user.id}
                    >
                        <div>{user.name}</div>
                        <div>{user.company.name}</div>
                        <div onClick={(e) => {
                            props.setSelectedUserId(user.id)
                            props.history.push('/app/Posts')
                        }}>view blog Posts</div>
                    </div>)
            })}
        </div>
    )
}

export default withRouter(Home);