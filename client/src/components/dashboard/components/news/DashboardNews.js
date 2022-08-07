import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./DashboardNews.css";

export default class dashboardNews extends Component {
    constructor() {
        super();
        this.state = {
            News: [],
        };
    }

    deleteTournament(id) {
        axios
            .delete("http://localhost:5000/news/api/" + id)
            .then((response) => {
                console.log(response);
                window.location.href = "/dashboard/news";
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/news/api/all")
            .then((response) => {
                this.setState({
                    News: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {News} = this.state;
        return (
            <div>
                <h1 className="titleContent">News</h1>
                <div className="buttonMargin">
                    <Link to="/dashboard/news/create" className="createButton">
                        Create +
                    </Link>
                </div>
                <table className="dashboardTable">
                    <tr>
                        {/* <th>ID</th> */}
                        <th width="20%">Title</th>
                        <th width="10%">News</th>
                    </tr>
                    {News.map((News) => (
                        <tr>
                            {/* <td>{News._id}</td> */}
                            <td>{News.title}</td>
                            <td>{News.content}</td>
                            <td>
                                <div className="actionContainer">
                                    <Link
                                        // to={{
                                        //   pathname: `/dashboard/news/edit/`,
                                        //   state: { News: News },
                                        // }}
                                        to={"/dashboard/news/edit/" + News._id}
                                        className="editButton"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        type="submit"
                                        class="deleteButton"
                                        onClick={this.deleteTournament.bind(this, News._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}
