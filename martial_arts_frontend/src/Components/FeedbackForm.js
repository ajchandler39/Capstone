import React from 'react';

export default class FeedbackForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        content: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

    handleSubmit(event)
    {
        event.preventDefault();
        this.props.postMessage(this.props.user.username, this.state.content, "feedback");
        window.location.reload();
    }

    handleChange(event)
    {
      let fieldName = event.target.name;
      let value = event.target.value;
      this.setState({ [fieldName]: value })
    }

    render()
    {
        return(
        <div className="feedback">
              <form className="form" onSubmit={this.handleSubmit}>
                  <h2 for="content">Feedback message: </h2>
                  <br/> <textarea name="content" type="textarea" rows="30" cols="60" style={{resize: "none"}} value={this.state.content} onChange={this.handleChange}/><br/>
                  <input type="submit" value="Submit" />
              </form>
        </div>)
    }
}