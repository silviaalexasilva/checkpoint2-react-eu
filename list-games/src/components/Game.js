import React from 'react'
import { Link } from 'react-router-dom'
import './Game.css'

const Game =({data, index, remove}) =>{
    console.log(data);

    return (
        <div>
            <h1 className="title">
                {data.name}
            </h1>
            <Link to={`/jeu/screenshots/${data.id}`}>
                <img className='GameImg' src={data.background_image} alt={data.name}/>
            </Link>

            <div className="Types">Genres:</div>
                {data.genres.map(genre => {
                    return(
                        <span>
                            {genre.name}
                        </span>
                    )
                })}
      
       <div className="erase">
        <input className="erasebutton" type='button' onClick={()=>remove(index)} value = 'Erase Game'/>
        </div>
    </div>
 )
}

export default Game
