import React from 'react';
import NavBar from '../Components/NavBar';
import FeedbackForm from '../Components/FeedbackForm';
import WelcomeBar from '../Components/WelcomeBar';

export default class Feedback extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { }
    this.postMessage = this.postMessage.bind(this);
}

    postMessage(user, cont, recip)
    {
        fetch(this.props.apiUrl + "/message",
            {method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(
             {"username": user,
             "contents": cont,
             "recipient": recip})})
                .catch((e) => console.log(e));
        alert("Message sent.");
    }

    render()
    {
        let welcome = <div></div>;
        if(this.props.user.username != "") welcome = <WelcomeBar user={this.props.user}/>;
        return(
            <div className="feedback">
                {welcome}
                <NavBar/>
                <FeedbackForm postMessage={this.postMessage} user={this.props.user}/>
            </div>
        )
    }
}