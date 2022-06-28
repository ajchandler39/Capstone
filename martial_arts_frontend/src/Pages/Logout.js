import React from 'react';
import NavBar from '../Components/NavBar';
import WelcomeBar from '../Components/WelcomeBar';

export default class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { }
}

    clearCookies()
    {
        document.cookie = "username=";
        document.cookie = "password=";
        document.cookie = "firstName=";
        document.cookie = "lastName=";
    }

    componentDidMount()
    {
        this.clearCookies();
    }

    render()
    {
        let welcome = <div></div>;
        if(this.props.user.username != "") welcome = <WelcomeBar user={this.props.user}/>;

        return(
            <div className="error">
                {welcome}
                <NavBar/>
                <p className="errorMsg">
                    Logged out successfully.
                </p>
            </div>
            )
    }
}