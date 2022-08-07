import React, {Component} from "react";
import axios from "axios";
import "./EditNews.css";
import {withRouter} from "react-router-dom";

// export default class editNews extends Component {
class editNews extends Component {
    constructor(props) {
        super(props);
        // const { _id, name, status, prize, game, region } =
        //   props.location.state.Newss;
        this.state = {
            // _id : "",
            title: "",
            content: "",
        };

        this.editNews = this.editNews.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    componentDidMount() {
        axios
            // .get("http://localhost:5000/news/api/" + this.state._id)
            // .get("http://localhost:5000/news/api/${this.props.match.params.id}")
            .get("http://localhost:5000/news/api/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    // currentNews: response.data,
                    title: response.data.title,
                    content: response.data.content,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    editNews(event) {
        event.preventDefault();
        const newNews = {
            title: this.state.title,
            content: this.state.content,
        };
        axios
            .put(
                "http://localhost:5000/news/api/" + this.props.match.params.id,
                newNews
            )
            .then((response) => {
                console.log(response);
                window.location.href = "/dashboard/news";
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        // const { currentNews } = this.state;
        return (
            <div>
                <h1 className="titleContent">Edit News</h1>
                <form onSubmit={this.editNews}>
                    <div className="editNewsInputGroup">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleFieldChange}
                            className="newsEditInput"
                        />
                    </div>
                    <div className="editNewsInputGroup">
                        <label>Content</label>
                        <input
                            type="text"
                            name="content"
                            value={this.state.content}
                            onChange={this.handleFieldChange}
                            className="newsEditInput"
                        />
                    </div>
                    <button
                        className="editNewsButton"
                        type="submit"
                        name="editNews"
                    >
                        Edit
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(editNews);
