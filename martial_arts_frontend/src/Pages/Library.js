import React from 'react';
import NavBar from '../Components/NavBar';
import TechList from '../Components/TechList';
import TechVideo from '../Components/TechVideo';
import TechDescription from '../Components/TechDescription';
import TechForm from '../Components/TechForm'

export default class Library extends React.Component
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
        techs: [],
        favs: [],
        userSearch: "",
        foreignTechs: {status: 404},
        user: {}
    }
    this.setSelectedTechnique = this.setSelectedTechnique.bind(this);
    this.postUserTechnique = this.postUserTechnique.bind(this);
    this.postUserFavorite = this.postUserFavorite.bind(this);
    this.updateUserTechnique = this.updateUserTechnique.bind(this);
    this.deleteUserTechnique = this.deleteUserTechnique.bind(this);
    this.deleteUserFavorite = this.deleteUserFavorite.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
}
    componentDidUpdate(prevProps) {
        if(this.props.user != prevProps.user)
        {
            this.setState({user: this.props.user})
            this.getAllUserFavorites(this.props.user.username);
            this.getAllUserTechniques(this.props.user.username);
        }
      } 

    setSelectedTechnique(tech)
    {
        this.setState({ selectedTechnique: tech })
    }

    postUserTechnique(form)
    {
        fetch(this.props.apiUrl + "/technique",
        {method: "POST", body: form})
            .catch((e) => console.log(e));

        alert("Technique posted.");
    }

    postUserFavorite(username, id)
    {
        fetch(this.props.apiUrl + "/user/fav/" + username + "/" + id,
            {method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify({"username": username, "techId": id})
            }).catch((e) => console.log(e));
    }

    getAllUserFavorites(username)
    {
        fetch(this.props.apiUrl + "/user/fav/" + username)
            .then(response => response.json())
            .then(data => this.setState({favs: data}));
    }

    getAllUserTechniques(username)
    {
        fetch(this.props.apiUrl + "/technique/" + username)
            .then(response => response.json())
            .then(data => this.setState({techs: data}));
    }

    async getAllForeignUserTechniques(first, last)
    {
        await fetch(this.props.apiUrl + "/technique/foreign/" + first + "/" + last)
            .then(response => response.json())
            .then(data => this.setState({foreignTechs: data}));
    }

    updateUserTechnique(form)
    {
        fetch(this.props.apiUrl + "/technique/" + this.state.selectedTechnique.id,
        {method: "PUT", body: form})
            .catch((e) => console.log(e));
        alert("Technique updated.");
    }
    
    deleteUserFavorite(username, techId)
    {
        if(!window.confirm("Are you sure you'd like to delete this technique?")) return;
        fetch(this.props.apiUrl + "/user/fav/" + username + "/" + techId, {method: "DELETE", body: {username: username, techId: techId}})
            .catch((e) => console.log(e));
    }

    deleteUserTechnique(techId)
    {
        if(!window.confirm("Are you sure you'd like to delete this technique?")) return;
        fetch(this.props.apiUrl + "/technique/" + techId,
        {method: "DELETE", body: JSON.stringify({techId: techId})})
            .catch((e) => console.log(e));
    }

    handleChange(e)
    {
        let fieldName = e.target.name;
        let value = e.target.value;
        this.setState({ [fieldName]: value })
    }

    handleClick(e)
    {
        e.preventDefault();
        let processedInput = this.state.userSearch.split(" ");
        this.getAllForeignUserTechniques(processedInput[0], processedInput[1]);
    }
    
    render()
    {
        let display;
        let status = this.state.foreignTechs.status;

        if(status == 500 || status == 404) display = <TechList apiUrl={this.props.apiUrl} setSelectedTechnique={this.setSelectedTechnique} getTechniques={{favs: this.state.favs, techs: this.state.techs}} className={"libraryTechList"} deleteUserFavorite={this.deleteUserFavorite}
        deleteUserTechnique={this.deleteUserTechnique} user={this.props.user}/>
        else display = <TechList apiUrl={this.props.apiUrl} setSelectedTechnique={this.setSelectedTechnique} getTechniques={{favs: {}, techs: this.state.foreignTechs}} className={"foreignLibraryTechList"} user={this.props.user}/>
        
        return(
        <div className="library">
            <NavBar page={"Library"}/>
            <div className="userLibrary">
                <div className="userSearchAndTechs">
                    <input name={"userSearch"} onChange={this.handleChange}/><button onClick={this.handleClick}>Search</button>
                    {display}
                </div>
                <div className="userVideoAndDesc">
                    <TechVideo videoUrl={this.props.apiUrl + "/technique/video/" + this.state.selectedTechnique.id}/>
                    <TechDescription desc={this.state.selectedTechnique.description}/>
                </div>
                <TechForm apiUrl={this.props.apiUrl} postTech={this.postUserTechnique} postFavorite={this.postUserFavorite} updateTech={this.updateUserTechnique} user={this.props.user} selectedTech={this.state.selectedTechnique}/>
            </div>
        </div>
        )
    }
}