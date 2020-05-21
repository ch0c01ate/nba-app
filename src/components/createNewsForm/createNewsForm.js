import React from "react";

import { Redirect } from 'react-router-dom'
import './createNewsForm.css'

export default class CreateNewsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            submitted: false,
        }
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.onAdd(this.state.title, this.state.image);
        this.setState( {submitted: true});
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        });

    }

    renderRedirect(){
        if(this.state.title && this.state.image && this.state.submitted)
            return (<Redirect exact to="/"></Redirect>);
    }

    render() {
        return (
            <div className="form-div">
                <form className="user-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Title</label>
                    <input placeholder="Title" onChange={(e) => this.handleChange(e, "title")}></input>
                    <label>Image URL</label>
                    <input placeholder="Image URL" onChange={(e) => this.handleChange(e, "image")}></input>
                    <input id="submit" type="submit" value="Create"></input>
                </form>
                {this.renderRedirect()}
            </div>
        )
    }
}