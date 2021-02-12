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
                    onClick={(e) => {
                        props.history.push('/app/Posts')
                        console.log(user.id)
                    }}>
                        <div>{user.name}</div>
                        <div>{user.company.name}</div>
                    </div>)
            })}
        </div>
    )
}

export default withRouter(Home);