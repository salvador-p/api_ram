import React from "react";
import Character from '../../components/character/character'
import "./home.css";
import Http from "../../lib/request";

class Home extends React.Component {
    state = {
        title: "Example of request using React",
        characters: [],
    };

    componentDidMount = () => {
        this.get_data(URL);
    };

    get_data = async () => {
        const response = await Http.instance.get_characters()
        this.setState({characters: response.results})
    };

    render() {
        return (
            <article className="top">
                <h1 className="title">{this.state.title}</h1>
                <h4 className="name">By: Salvador Perez</h4>
                <div className="Characters">
                    {this.state.characters.map((character) => {
                        return <Character character={character} />
                    })}
                </div>
            </article>
        );
    }
}

export default Home;