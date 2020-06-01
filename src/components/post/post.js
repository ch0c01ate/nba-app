import React, {useEffect} from "react";
import './post.css'
import { fetchPost } from '../../actions'
import { connect } from 'react-redux';

class Post extends React.Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
        return (
            <div className="news-list-item">
                <img className="news-list-item-image" alt="photo" src={this.props.news.image}/>
                <div className="news-list-item-container">
                    <span>{this.props.news.title}</span>
                </div>
                <div>
                    <p className={"news-item-text"}>{this.props.news.description}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    news: state.news
});

const mapDispatchToProps = (dispatch) => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post)