import React from "react";
import "./createNews.css"
import CreateNewsForm from "../createNewsForm/createNewsForm";

export default class CreateNews extends React.Component {

    addNewPost(title, image) {
        const newPost = { title: title, image: image, isLiked: false }

        fetch('news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }).then((e) => {
            return e.json()
        });
    }

    render() {
        return (
            <div className="create-form">
                <CreateNewsForm onAdd={(title, image) => this.addNewPost(title, image)}></CreateNewsForm>
            </div>
        )
    }
}