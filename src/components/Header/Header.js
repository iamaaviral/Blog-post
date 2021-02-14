import React from 'react';
import { withRouter } from 'react-router-dom';
import LocalSearch from '../Search/Search';

import './style.scss'

const Header = props => {
    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="logo-section hoverable" onClick={() => {
                     props.history.push('/Blog-post')
                }}>
                    BLOG POST
                </div>
                <div className="content-section">
                        <LocalSearch             
                            placeholder="Type to search"
                            searchTerm={props.setSearchTerm}/>
                    <div className="name">
                        Aviral
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);