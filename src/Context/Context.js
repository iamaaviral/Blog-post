import React from 'react';
import { withRouter } from 'react-router-dom';

const Context = React.createContext('blog');

class BlogContext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user : [],
            posts: [],
            selectedUserId: 0,
            setUser: (user) => {
                this.setState({
                    user
                })
            },
            setUserPosts: (posts) => {
                this.setState({
                    posts
                })
            },
            setSelectedUserId: (id) => {
                this.setState({selectedUserId: id})
            }
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

const BlogContextWithRouter = withRouter(BlogContext);
const ContextHOC = (SomeComponent, props) => {
    return (
        <Context.Consumer>
            {val => <SomeComponent {...val} {...props} />}
        </Context.Consumer>
    );
};

export {
    Context,
    BlogContextWithRouter as BlogContext,
    ContextHOC,
};
