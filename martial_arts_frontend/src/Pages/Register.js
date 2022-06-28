import React from 'react';
import NavBar from '../Components/NavBar';
import RegisterForm from '../Components/RegisterForm';
import WelcomeBar from '../Components/WelcomeBar';

export default class Register extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        
    }
    this.postUser = this.postUser.bind(this);
}

    postUser(username, password, firstName, lastName, email)
    {
        fetch(this.props.apiUrl + "/user",
        {method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
        {username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email})})
            .catch((e) => console.log(e));
            alert("Account Created successfully!");
    }

    render()
    {
        let welcome = <div></div>;
        if(this.props.user.username != "") welcome = <WelcomeBar user={this.props.user}/>;

        return(
            <div className="register">
                {welcome}
                <NavBar/>
                <RegisterForm postUser={this.postUser}/>
            </div>)
    }
}