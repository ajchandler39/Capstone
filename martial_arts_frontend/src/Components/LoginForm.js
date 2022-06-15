import React from 'react';

export default class LoginForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        user:{username: "", password: ""},
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
        let user = this.state.user;
        this.props.getUser(user.username, user.password);
    }

    componentDidUpdate(prevProps) {
        if(this.props.user != prevProps.user)
        {
            if(this.props.user.username != '') window.location ='http://' + window.location.hostname + ':3000/library';
        }
      } 

    render()
    {
        return(
        <div className="form">
            <form className="inputs" onSubmit={this.handleSubmit}>
                <label className="loginLabel">Login</label>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" onChange={this.handleChange}/>
                <label for="username">Password: </label>
                <input type="password" id="password" name="password" onChange={this.handleChange}/>
                <button id="userLogin">Login</button>
            </form>
            <nav>
                <a href="register"><button>Register</button></a>
            </nav>
        </div>)
    }
}