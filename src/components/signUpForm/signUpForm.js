import React from "react";

import { Redirect } from 'react-router-dom'
import './signUpForm.css'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            email: '',
            password: '',
            submitted: false,
        }
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.onAdd(this.state.nickname, this.state.email, this.state.password);
        this.setState({submitted: true});
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        });
    }

    renderRedirect() {
        if (this.state.nickname && this.state.email && this.state.password && this.state.submitted)
            return (<Redirect exact to="/"></Redirect>);
    }

    render() {
        return (
            <div className="form-div">
                <form onSubmit={(e) => this.handleSubmit(e)} className="user-form">
                    <label>Nickname</label>
                    <input placeholder="Nickname" onChange={(e) => this.handleChange(e, "nickname")}></input>
                    <label>Email</label>
                    <input placeholder="Email" onChange={(e) => this.handleChange(e, "email")}></input>
                    <label>Password</label>
                    <input placeholder="Password" type="password" onChange={(e) => this.handleChange(e, "password")}></input>
                    <input id="submit" type="submit" value="Sign Up"></input>
                </form>
                {this.renderRedirect()}
            </div>
        )
    }
}