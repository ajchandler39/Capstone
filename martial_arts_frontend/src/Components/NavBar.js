import React from 'react';

export default class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            links:
            [
                "DevBlog",
                "Library",
                "Forum",
                "Feedback",
                "About",
                "Login"
            ],
            style:
            {
                borderStyle: "solid"
            }
        }
    }

    getLinks()
    {
        return this.state.links.map((e)=> { return <a key={e} href={"http://" + window.location.hostname + ":3000/" + e.toLowerCase()}>{e + " "}</a> })
    }

    render()
    {
        return(
        <nav className="navbar">
            {this.getLinks()}
        </nav>)
    }
}