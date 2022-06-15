import React from 'react';

export default class RegisterForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        user:
        {
        username: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        email: ""
        },
        style:
        {
            borderStyle: "solid"
        }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

    handleChange(event)
    {
        let fieldName = event.target.name;
        let value = event.target.value;
        let userUpdate = this.state.user
        userUpdate[fieldName] = value;
        this.setState({user: userUpdate});
    }

    handleSubmit(event)
    {
        event.preventDefault();
        let u = this.state.user;
        const emailRegex = ".+@.+\\..+";
        if(u.password != u.passwordConfirm) alert("Passwords do not match.");
        else if(!u.email.match(emailRegex)) alert("Invalid email.");
        else
        {
            this.props.postUser(u.username, u.password, u.firstName, u.lastName, u.email);
            window.location = "http://" + window.location.hostname + ':3000/login';
        }
    }
    
    render()
    {
        return(
        <div className="form">
            <form className="inputs" onSubmit={this.handleSubmit}>
                <label className="registerLabel">Register</label>
                <label for="username">Username: </label>
                <input name="username" type="text" onChange={this.handleChange}/>
                <label for="password">Password:</label>
                <input name="password" type="text" onChange={this.handleChange}/>
                <label for="passwordConfirm">Password again:</label>
                <input name="passwordConfirm" type="text" onChange={this.handleChange}/>
                <label for="firstName">First name:</label>
                <input name="firstName" type="text" onChange={this.handleChange}/>
                <label for="lastName">Last name:</label>
                <input name="lastName" type="text" onChange={this.handleChange}/>
                <label for="email">Email:</label>
                <input name="email" type="text" onChange={this.handleChange}/>
                <button id="submitRegister">Register</button>
            </form>
            <nav>
                <a href="login"><button>Login</button></a>
            </nav>
        </div>)
    }
}