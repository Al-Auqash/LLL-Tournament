import React, {Component} from "react";
import "./CreateNews.css";
import axios from "axios";

export default class createNews extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            content: "",
        };

        this.createNews = this.createNews.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    createNews(event) {
        event.preventDefault();

        axios
            .post("http://localhost:5000/news/api/create/", {
                title: this.state.title,
                content: this.state.content,
            })
            .then((response) => {
                console.log(response);
                window.location.href = "/dashboard/news";
                // alert("news created!");
            })
            .catch((error) => {
                console.log(error);
            });

        this.setState({
            title: "",
            content: "",
        });
    }

    render() {
        return (
            <div>
                <h1 className="titleContent">Create Tournament</h1>
                <form onSubmit={this.createNews} method="post">
                    <div className="createTournamentInputGroup">
                        <label>Title</label>
                        <input
                            autoComplete="off"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleFieldChange}
                            className="tournamentCreateInput"
                        />
                    </div>
                    <div className="createTournamentInputGroup">
                        <label>content</label>
                        <input
                            autoComplete="off"
                            type="text"
                            name="content"
                            value={this.state.content}
                            onChange={this.handleFieldChange}
                            className="tournamentCreateInput"
                        />
                    </div>
                    <button
                        className="createTournamentButton"
                        type="submit"
                        name="createTournament"
                    >
                        Create
                    </button>
                </form>
            </div>
        );
    }
}
