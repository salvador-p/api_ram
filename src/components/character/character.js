import React from "react";
import { Link } from "react-router-dom"
import "./character.css"


const Character = (props) =>{
    const { character } = props
    return (
        <React.Fragment>
            <div className="Character__container">
                <Link
                    className="Character__image"
                    to={`/character/${character.id}`}
                >
                    <img
                        className="Character__image"
                        src={character.image}
                        alt={character.name}
                    />
                </Link>
                
                <div className="Character__data">
                    <h3 className="Character__name">Name: {character.name}</h3>
                    <p className="Character__status">Status: {character.status}</p>
                    <p className="Character_species">Specie: {character.species}</p>
                    <small>Gender:{character.gender}  </small>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Character;