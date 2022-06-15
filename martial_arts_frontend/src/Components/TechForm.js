import React from 'react';

export default class TechForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
          name: "",
          type: "Takedowns",
          description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.fileInput = React.createRef();
    }
  
    handleSubmit(event)
    {
      event.preventDefault();
      const form = new FormData();
      form.append("creator", this.props.user.username)
      Object.keys(this.state)
       .forEach(key => { form.append(key, this.state[key]) });
      let videoUpload = this.fileInput.current.files[0];
      form.append("video", videoUpload);
      this.props.postTech(form);
      window.location.reload();
    }
  
    handleChange(event)
    {
      let fieldName = event.target.name;
      let value = event.target.value;
      this.setState({ [fieldName]: value })
    }

    handleUpdate(e)
    {
      e.preventDefault();
      const form = new FormData();
      Object.keys(this.state)
        .forEach(key => { form.append(key, this.state[key]) });
        form.append("video", this.fileInput.current.files[0]);
      this.props.updateTech(form);
      window.location.reload();
    }
  
    render()
    {
      let updateBtn;
      if(this.props.user.username == this.props.selectedTech.creator) updateBtn = <button onClick={this.handleUpdate}>Update</button>;
        return(
          <div>
              <form onSubmit={this.handleSubmit}>
                  <label> Name: <br/> <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/></label><br/>
                  <label> Type: <br/>
                    <select name="type" value={this.state.type} onChange={this.handleChange} defaultValue="Takedowns">
                      <option value="Takedowns">Takedowns</option>
                      <option value="Chokeholds">Chokeholds</option>
                      <option value="Joint locks">Joint locks</option>
                      <option value="Sweeps">Sweeps</option>
                      <option value="Positional grappling">Positional grappling</option>
                    </select>
                  </label><br/>
                  <label> Video: <br/> <input name="video" type="file" accept=".mp4" ref={this.fileInput}/></label><br/>
                  <label> Description: <br/> <textarea name="description" type="textarea" rows="30" cols="60" style={{resize: "none"}} value={this.state.description} onChange={this.handleChange}/></label><br/>
                  <div id="techFormBtns">
                    <input type="submit" value="Submit" />
                    {updateBtn}
                  </div>
              </form>
          </div>
        )
    }
}