import React from 'react';

const Context = React.createContext('blog');

class BlogContext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user : [],
            setUser: (user) => {
                this.setState({
                    user
                })
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
const ContextHOC = (SomeComponent, props) => {
    return (
        <Context.Consumer>
            {val => <SomeComponent {...val} {...props} />}
        </Context.Consumer>
    );
};

export {
    Context,
    BlogContext,
    ContextHOC,
};
