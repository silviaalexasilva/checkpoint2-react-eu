import React from 'react'
import Game from './Game'
import axios from 'axios'
import './Game.css'

class Gamelist extends React.Component {
    state = {
      games : [],
      filtered : false
    }
  
    FilterGames = () => {
      this.setState({filtered : !this.state.filtered})
  
    }
  
    DeleteGames = (any) => {
      const newGamesList = this.state.games
      newGamesList.splice(any, 1)
      this.setState({ games : newGamesList })
    }
  
    fetchData = () => {
      axios.get('https://wild-games.herokuapp.com/api/v1')
      .then(res => res.data)
      .then(res => this.setState({ games : res}))
    }
    componentDidMount(){
      this.fetchData()
    }
  
    render() {
      
      return(
        <div className="main">
          <input className="buttons" type="button" value={this.state.filtered ? "See All" : "Best Games"} onClick={this.FilterGames}/>
  
          {this.state.filtered ? 
          this.state.games.filter(game => {
            return game.rating >= 4.5
          })
          .map((game ,i )=>{
            return <Game data = {game} index={i} remove={this.handleDelete}/>
          })
          :
          this.state.games.map((game ,i )=>{
            return <Game data = {game} index={i} remove={this.DeleteGames}/>
          })}
  
        </div>
      )
    }
  }
  
  export default Gamelist