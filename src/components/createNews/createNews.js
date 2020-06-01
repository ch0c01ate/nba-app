import React from "react";
import "./createNews.css"
import CreateNewsForm from "../createNewsForm/createNewsForm";
import {createNews} from "../../actions";
import {connect} from "react-redux";

class CreateNews extends React.Component {

    addNewPost(title, image, description) {
        const newPost = { title: title, image: image, description: description, isLiked: false }
        this.props.createNews(title, image);
    }

    render() {
        return (
            <div className="create-form">
                <CreateNewsForm onAdd={(title, image, description) => this.addNewPost(title, image, description)}></CreateNewsForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    news: state.news
});

const mapDispatchToProps = (dispatch) => ({
    createNews: () => dispatch(createNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNews)