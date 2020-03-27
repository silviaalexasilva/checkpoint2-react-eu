import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Screenshots extends React.Component {
  state = {

  }
  
  fetchGame = () => {
    const id = this.props.match.params.id
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      
      this.setState({game : data.filter(item => {
        return item.id == id
      }
        )})
    })
  }

  componentDidMount(){
    this.fetchGame()
  }
  
  render(){
    console.log(this.state.game);
    return(
      <div>
        <Link to='/'>
          <input className="buttons" type='button' value ='Back to Home'/>
        </Link>

        {this.state.game ? this.state.game[0].short_screenshots.map( screenshot => {
          return <img className="GameImg" src = {screenshot.image} alt={this.state.game[0].name}/>
        }) : 'loading' }
      </div>
    )
  }
}
export default Screenshots