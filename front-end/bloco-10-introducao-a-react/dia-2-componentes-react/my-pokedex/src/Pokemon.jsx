import React from 'react';

class Pokemon extends React.Component {
    render () {
        return (
        <div className="pokemonBox">
            <div className="pokemon">
                <p>{this.props.pokemon.name}</p>
                <p>{this.props.pokemon.type}</p>
                <p>{this.props.pokemon.averageWeight.value} kg</p>
            </div>
                <img src={this.props.pokemon.image} alt="ilustração do pokemon" />
        </div>
        );
    }
}

export default Pokemon;