import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss'

const Home = props => {
    return (
        <div className="user-container">
            {props.user.map((user) => {
                let name = user.name.toUpperCase();
                let company = user.company.name.toUpperCase();
                if (name.includes(props.searchTerm.toUpperCase()) || company.includes(props.searchTerm.toUpperCase())) 
                {
                return (
                    <div className="each-user-wrapper"
                        key={user.id}
                    >
                        <div className="user-detail">
                            <div className="user-name">{user.name}</div>
                            <div className="user-company">{user.company.name}</div>
                        </div>
                        <div title="view blog posts"
                         className="view-btn hoverable"
                            onClick={(e) => {
                            props.setSelectedUserId(user.id)
                            props.setSearchTerm('')
                            props.history.push('/Blog-post/Posts')
                        }}>view Posts</div>
                    </div>)
                }
            })}
        </div>
    )
}

export default withRouter(Home);