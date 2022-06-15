import React from 'react';

export default class TechDescription extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { }
    }

    render()
    {
        return(
            <div className="techDescription">
                <p style={this.state.style}>{this.props.desc}</p>
            </div>
        )
    }
}