import React, {useEffect} from "react";
import './news-list.css'

import NewsItem from "../news-item/news-item";
import { connect } from 'react-redux';
import {fetchNews} from "../../actions";

class NewsList extends React.Component {

    componentDidMount() {
        this.props.fetchNews();
    }

    toggleIsLiked(id){
        this.setState((state) => ({
            news: state.news.map(n => n.id === id ? {...n, isLiked: !n.isLiked} : n)
        }))
    }

    render() {
        return (
            <div className="news-list-container">
                <div className="news-list-header-item">
                    <img className="news-list-logo" src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=288&h=288&transparent=true" alt="logo"/>
                    <div className="news-list-header">NBA</div>
                </div>
                { this.props.news.map((n) => (
                    <NewsItem key={n.id} n={n} toggleIsLiked={(id) => this.toggleIsLiked(id)}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    news: state.news
});

const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => dispatch(fetchNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)