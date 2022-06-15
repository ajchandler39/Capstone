import React from 'react';

export default class TechVideo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { }
    }

    render()
    {
        let video;
        if(this.props.videoUrl != null) video = <video style={{display: "block", margin:"auto", height:500, width: 500}} controls src={this.props.videoUrl}></video>
        else video = <video style={{display: "block", margin:"auto", height:500, width: 500}} controls></video>
        return(
            <div style={this.state.style}>
                {video}
            </div>
        )
    }
}