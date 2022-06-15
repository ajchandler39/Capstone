import React from 'react';
import NavBar from '../Components/NavBar';
import BlogPost from '../Components/BlogPost';

export default class DevBlog extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { posts: [] }
}

    componentDidMount()
    {
        this.getMessages();
    }

    getMessages()
    {
    fetch(this.props.apiUrl + "/message/received/devblog")
        .then(response => response.json())
        .then(data => this.setState({posts: data}));
    }

    blogPostList()
    {
        return this.state.posts.map(e => <BlogPost key={e.id} date={e.datePosted} content={e.contents}/>)
    }

    render()
    {
        let list = this.blogPostList().reverse();
        return(
            <div className="devblog">
                <NavBar/>
                <div className = "posts">
                    {list}
                </div>
            </div>
        )
    }
}