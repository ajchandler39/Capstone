import React from 'react';
import Register from './Pages/Register';
import Forum from './Pages/Forum';
import Library from './Pages/Library';
import About from './Pages/About';
import DevBlog from './Pages/DevBlog';
import Feedback from './Pages/Feedback';
import Login from './Pages/Login';
import Error from './Pages/Error';

export default class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      apiUrl: "http://" + window.location.hostname + ":8080/api",
      currPath: window.location.pathname,
      user: {
      username: "aj",
      password: "",
      firstName: "alijah",
      lastName: "chandler"
      }
    }
  }

  componentDidMount()
  {
    this.setCookies();
  }

  async setCookies()
  {
    let tempUser = {...this.state.user}
    for(let prop in tempUser)
    {
      let value = this.getCookie(prop);
      console.log(value)
      tempUser[prop] = value;
    }
    this.setState({user: tempUser}, console.log(tempUser));
  }

  getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
  }

  render()
  {
    console.log(this.state.apiUrl);
    if(this.state.currPath === "/" || this.state.currPath === "/devblog") return <DevBlog apiUrl={this.state.apiUrl}/>
    else if(this.state.currPath === "/library") return <Library apiUrl={this.state.apiUrl} user={this.state.user}/>
    else if(this.state.currPath === "/forum") return <Forum apiUrl={this.state.apiUrl} user={this.state.user}/>
    else if(this.state.currPath === "/about") return <About apiUrl={this.state.apiUrl}/>
    else if(this.state.currPath === "/feedback") return <Feedback apiUrl={this.state.apiUrl} user={this.state.user}/>
    else if(this.state.currPath === "/login") return <Login apiUrl={this.state.apiUrl}/>
    else if(this.state.currPath === "/register") return <Register apiUrl={this.state.apiUrl}/>
    else return <Error/>;
  };
}