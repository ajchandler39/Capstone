import React from 'react';
import NavBar from '../Components/NavBar';
import LoginForm from '../Components/LoginForm';

export default class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        login: true,
        user: { username: "", password: "", firstName: "", lastName: ""}
    }
    this.getUser = this.getUser.bind(this);
}

    async getUser(username, password)
    {
        try
        {
        await fetch(this.props.apiUrl + "/user/" + username + "/" + password)
            .then(response => response.json())
            .then(data => this.setState({user: data}));
        } catch(e)
        {
            alert("User does not exist.");
            return;
        }
        document.cookie = "username=" + this.state.user.username;
        document.cookie = "password=" + this.state.user.password;
        document.cookie = "firstName=" + this.state.user.firstName;
        document.cookie = "lastName=" + this.state.user.lastName;
    }

    render()
    {
        return(
            <div className="login">
                <NavBar/>
                <LoginForm getUser={this.getUser} user={this.state.user}/>
            </div>)
    }
}