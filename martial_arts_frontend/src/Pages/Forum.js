import React from 'react';
import NavBar from '../Components/NavBar';
import TechList from '../Components/TechList';
import TechVideo from '../Components/TechVideo';
import TechDescription from '../Components/TechDescription';

export default class Forum extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        selectedTechnique:
        {
            id: 0,
            name: "",
            type: "",
            description: "",
            video: "",
            rating: 1
        },
        latest:[],
        popular:[]
    }
    this.setSelectedTechnique = this.setSelectedTechnique.bind(this);
    this.postUserFavorite = this.postUserFavorite.bind(this);
}

    setSelectedTechnique(tech)
    {
        this.setState({ selectedTechnique: tech })
    }

    componentDidMount()
    {
        this.getLatestTechnqiues();
        this.getPopularTechniques();
    }

    postUserFavorite(username, id)
    {
        fetch(this.props.apiUrl + "/user/fav/" + username + "/" + id,
            {method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify({"username": username, "techId": id})
            }).catch((e) => console.log(e));
        alert("Favorite added successfully!")
    }

    getPopularTechniques()
    {
        fetch(this.props.apiUrl + "/technique/popular")
            .then(response => response.json())
            .then(data => this.setState({popular: data}));
    }

    getLatestTechnqiues()
    {
        fetch(this.props.apiUrl + "/technique/latest")
        .then(response => response.json())
        .then(data => this.setState({latest: data}));
    }

    render()
    {
        return(
        <div className="forum">
            <NavBar page={"Forum"}/>
            <div className="userLibrary">
                <TechList apiUrl={this.props.apiUrl} setSelectedTechnique={this.setSelectedTechnique} getTechniques={this.state.popular} className={"popularTechList"} postUserFavorite={this.postUserFavorite} user={this.props.user}/>
                <div className="userVideoAndDesc">
                    <TechVideo videoUrl={this.props.apiUrl + "/technique/video/" + this.state.selectedTechnique.id}/>
                    <TechDescription desc={this.state.selectedTechnique.description}/>
                </div>
                <TechList apiUrl={this.props.apiUrl} setSelectedTechnique={this.setSelectedTechnique} getTechniques={this.state.latest} className={"latestTechList"} postUserFavorite={this.postUserFavorite} user={this.props.user}/>
            </div>
        </div>
        )
    }
}