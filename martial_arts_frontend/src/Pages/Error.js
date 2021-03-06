import React from 'react';
import NavBar from '../Components/NavBar';
import WelcomeBar from '../Components/WelcomeBar';

export default class Error extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
    }
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
                    Something went wrong. Please choose a page above.
                </p>
            </div>
        )
    }
}