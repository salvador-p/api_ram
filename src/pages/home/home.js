import React from "react";
import Character from '../../components/character/character';
import "./home.css";
import Http from "../../lib/request";


class Home extends React.Component {
    state = {
        title: "Rick and Morty API",
        characters: [],
    };

    componentDidMount () {
        this.get_data();
    };

    get_data = async () => {
        const response = await Http.instance.get_characters()
        console.log(response)
        this.setState({characters: response})
    };

    render() {
        return (
            <article className="top">
                <h1 className="title">{this.state.title}</h1>
                <div className="Characters">
                <h4 className="name">Made it By: Salvador Perez</h4>
                    {this.state.characters.map((character) => <Character character={character} key={character.id} />)}
                </div>
            </article>
        );
    }
}

export default Home;