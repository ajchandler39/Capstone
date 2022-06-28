import React from 'react';
import NavBar from '../Components/NavBar';
import WelcomeBar from '../Components/WelcomeBar';

export default class About extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { }
}

    render()
    {
        let welcome = <div></div>;
        if(this.props.user.username != "") welcome = <WelcomeBar user={this.props.user}/>;
        
        return(
        <div className="about">
            {welcome}
            <NavBar/>
            <div className="content">
                <h2>
                    About us.<br/>
                    (Project description)
                </h2>
                <p>
                    Users can be created through the register form at the /register mapping. This can be accessed by pressing the login button in the NavBar, then the register button below the login form. The register form will check to make sure the username is unique, the passwords match, and the email is valid.
                    <br/><br/>
                    Once registered, the user will be redirected to the login page, where they can login with the same details. Entering invalid details will alert the user, and allow them to try again. If they enter correct user details, they will be redirected to their library.
                    <br/><br/>
                    A user is able to add techniques on their library page by filling out the righthand form. Each technique requires a name, type, description which includes details of their technique, and a video upload.
                    Once submitted, the user will be alerted whether or not it was posted successfully. The page will reload and the technique will be added to their library on the left hand side.
                    A user can then select their own technique by clicking on and expanding its type, then clicking the newly added technique. The techniques video and description will pop up in the middle of the screen.
                    The user can edit the technique by altering any of the forms fields and pressing "edit", while the technique is selected.
                    The user can find other users techniques by entering the creators first and last name in the search bar above. The user can add techniques of the foreign user to the favorite section of their library by clicking the star within the foreign users technique icon.
                    <br/><br/>
                    The forum page is public, the same for all users, and lists the newest techniques, as well as the most favorited technique of those that share the same name. Any of the techniques of these two lists can be selected and added to a users favorites.
                    <br/><br/>
                    Updates, development plans, news, and more are on the /DevBlog page, where posts are displayed and ordered by a displayed date of post. Currently devblog posts can only be made through postman post requests. The name of the developer who made the post will appear in the "Message" table, with the recipient being "devblog".
                    <br/><br/>
                    Feedback can be posted from users in the /feedback page. The name of the user who sent the message will be displayed in the Message table, with "feedback" as its recipient.
                </p>
            </div>
        </div>)
    }
}