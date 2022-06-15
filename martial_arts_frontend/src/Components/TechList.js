import React from 'react';
import starImg from '../resources/star.png'
import starFilledImg from '../resources/starFilled.png'

export default class TechList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        techniques:[],
        style: { }
    }
}

    typeList()
    {
        let result = [];
        if(this.props.className == "libraryTechList")
        {


            let techObj = this.props.getTechniques.techs;
            let favObj = this.props.getTechniques.favs;
            result.push(<h1 className="techHeader">Techniques:</h1>)
            for(const property in techObj)
            {
                let type = <Type key={"a" + techObj[property][0].id} techs={techObj[property]} setSelectedTechnique={this.props.setSelectedTechnique} className={"techTypes"} deleteUserTechnique={this.props.deleteUserTechnique} user={this.props.user}/>;
                result.push(type);
            }
            result.push(<h1 className="favHeader">Favorites:</h1>)
            for(const property in favObj)
            {
                let type = <Type key={"b" + favObj[property][0].id} techs={favObj[property]} setSelectedTechnique={this.props.setSelectedTechnique} className={"favTypes"} deleteUserFavorite={this.props.deleteUserFavorite} user={this.props.user}/>;
                result.push(type);
            }
        } else if(this.props.className == "foreignLibraryTechList")
        {
            let techObj = this.props.getTechniques.techs;
            for(const property in techObj)
            {
                let type = <Type key={"a" + techObj[property][0].id} techs={techObj[property]} setSelectedTechnique={this.props.setSelectedTechnique} className={"foreignLibraryTypes"} postUserFavorite={this.props.postUserFavorite} user={this.props.user}/>;
                result.push(type);
            }
        } else if(this.props.className == "popularTechList")
        {
            let techObj = this.props.getTechniques
            result.push(<h1 className="popHeader">Most popular:</h1>)
            for(const property in techObj)
            {
                let type = <Type key={"a" + techObj[property][0].id} techs={techObj[property]} setSelectedTechnique={this.props.setSelectedTechnique} className={"popularTypes"} postUserFavorite={this.props.postUserFavorite} user={this.props.user}/>;
                result.push(type);
            }
        } else if(this.props.className == "latestTechList")
        {
            result.push(<h1 className="popHeader">New:</h1>)
            result.push(this.props.getTechniques.map(e => <Technique key={e.id} tech={e} setSelectedTechnique={this.props.setSelectedTechnique} className={"latestTechs"} postUserFavorite={this.props.postUserFavorite} user={this.props.user}/>))
        }
        return result;
    }

    render()
    {
        let list = this.typeList();
        return(
        <div >
            {list}
        </div>)
    }
}

class Type extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = 
      {
        toggle: false
      }
      this.toggleSelect = this.toggleSelect.bind(this);
  }


    techniqueList()
    {
        console.log(this.props.className)
        if(this.props.className == "foreignLibraryTypes") return this.props.techs.map(e => <Technique key={e.id} tech={e} setSelectedTechnique={this.props.setSelectedTechnique} className={"foreignLibraryTechs"} postUserFavorite={this.props.postUserFavorite} user={this.props.user}/>)
        else if(this.props.className == "popularTypes") return this.props.techs.map(e => <Technique key={e.id} tech={e} setSelectedTechnique={this.props.setSelectedTechnique} className={"popularTechs"} postUserFavorite={this.props.postUserFavorite} user={this.props.user}/>)
        else if(this.props.className == "techTypes") return this.props.techs.map(e => <Technique key={e.id} tech={e} setSelectedTechnique={this.props.setSelectedTechnique} className={"techs"} deleteUserTechnique={this.props.deleteUserTechnique} user={this.props.user}/>)
        else if(this.props.className == "favTypes") return this.props.techs.map(e => <Technique key={e.id} tech={e} setSelectedTechnique={this.props.setSelectedTechnique} className={"favs"} deleteUserFavorite={this.props.deleteUserFavorite} user={this.props.user}/>)
    }

    toggleSelect()
    {
        this.setState({toggle: !this.state.toggle})
    }

    render()
    {
        let techList = [];
        if(this.state.toggle) techList = this.techniqueList();
        return(
            <div className="type">
                <h2 onClick={this.toggleSelect}>{this.props.techs[0].type}</h2>
                <div>{techList}</div>
            </div>
        )
    }
}


class Technique extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
        techniques:[],
        style: { }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
    this.handleTechDelete = this.handleTechDelete.bind(this);
}

  handleClick()
  {
    this.props.setSelectedTechnique(this.props.tech);
  }

  handleFavorite()
  {
    this.props.postUserFavorite(this.props.user.username, this.props.tech.id)
  }

  handleUnfavorite()
  {
    this.props.deleteUserFavorite(this.props.user.username, this.props.tech.id);
    window.location.reload();
  }

  handleTechDelete()
  {
    this.props.deleteUserTechnique(this.props.tech.id);
    window.location.reload();
  }
      render()
      {
          let star;
          if(this.props.className == "foreignLibraryTechs" || this.props.className == "latestTechs" || this.props.className == "popularTechs") star = <div width="20" height="20" onClick={this.handleFavorite} className="emptyStar"/>;
          else if(this.props.className == "techs") star = <div onClick={this.handleTechDelete} className="delete" />;
          else if(this.props.className == "favs") star = <div onClick={this.handleUnfavorite} className="star"/>;
          return(
              <div className="technique" onClick={this.handleClick}>
                  <div>{this.props.tech.name}</div>
                  {star}
              </div>
          )
      }
}