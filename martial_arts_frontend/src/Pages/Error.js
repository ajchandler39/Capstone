import React from 'react';
import NavBar from '../Components/NavBar';

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
        return(
            <div className="error">
                <NavBar/>
                <p className="errorMsg">
                    Something went wrong. Please choose a page above.
                </p>
            </div>
        )
    }
}