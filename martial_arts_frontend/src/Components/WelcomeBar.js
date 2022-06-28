import React from 'react';

export default class WelcomeBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { }
    }

    render()
    {
        return(
            <div className="welcome">
                <span>Welcome, {this.props.user.username}!</span>
                <a href="logout">(Logout)</a>
            </div>
        )
    }
}