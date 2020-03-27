import React from 'react'
import { Link } from 'react-router-dom'
import './Game.css'

const Game = ({game, data, removeGame, remove}) =>{
    const handleRemoveGame = () => {
        removeGame(game)
    }
    return (
        <div>
            <h1 className="title">
                {data.name}
            </h1>
            <Link to={`/jeu/screenshots/${data.id}`}>
        <img className='GameImage' src={data.background_image} alt={data.name}/>
      </Link> 
         <div className="info">
            <div className="Types">Genres: {data.genres.map(genre => {
                return(
                     <span>
                        {genre.name} 
                        </span> ) })}</div>
            <div className="Types">Release Date:
                     <span>
                        {data.released}
                        </span> </div>
                        <div className="Types">Rating:
                     <span>
                        {data.rating}
                        </span> </div>
            </div>
            <div className="action">
           
             <button className="buttonshots"><Link to={`/jeu/screenshots/${data.id}`}>Screens</Link></button>
                
         <div className="erase">
        <input className="erasebutton" type='button' onClick={()=>remove(handleRemoveGame)} value = 'Erase Game'/>
        </div>
        </div>
    </div>
 )
}

export default Game;
