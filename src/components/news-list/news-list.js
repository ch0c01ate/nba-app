import React from "react";
import './news-list.css'

import NewsItem from "../news-item/news-item";

export default class NewsList extends React.Component {

    constructor() {
        super();

        this.state = {
            news: [{
                id: 1,
                title: "Five reasons MJ would be just as good in today's NBA",
                image: "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0417%2Fr690327_1296x518_5%2D2.jpg&w=1256&h=502&scale=crop&cquality=40&location=center&format=jpg",
                isLiked: false,
            }, {
                id: 2,
                title: "Ranking the top 74 NBA players of all time: Nos. 74-41",
                image: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0509%2Fnba_74_players_1_5x2.jpg&w=1256&h=502&scale=crop&cquality=40&location=center&format=jpg",
                isLiked: false,
            }]
        }
    }

    componentDidMount() {
        fetch('news').then(resp => {
            return resp.json();
        }).then(body => {
            console.log(body);
            this.setState({
                news: body
            });
        })
    }

    toggleIsLiked(id){
        this.setState((state) => ({
            news: state.news.map(n => n.id === id ? {...n, isLiked: !n.isLiked} : n)
        }))
    }

    updateList(update){
        this.setState((state) => ({
            news: [...this.state.news, ...update],
        }));
    }

    render() {
        return (
            <div className="news-list-container">
                <div className="news-list-header-item">
                    <img className="news-list-logo" src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=288&h=288&transparent=true" alt="logo"/>
                    <div className="news-list-header">NBA</div>
                </div>
                { this.state.news.map((n) => (
                    <NewsItem key={n.id} n={n} toggleIsLiked={(id) => this.toggleIsLiked(id)}/>
                ))}
            </div>
        )
    }
}