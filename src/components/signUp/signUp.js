import React from "react";
import "./signUp.css"
import SignUpForm from "../signUpForm/signUpForm";

export default class SignUp extends React.Component {
    addNewUser(nickname, email, password) {

        const newUser = { nickname: nickname, email: email, password: password }

        fetch('users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then((e) => {
            return e.json()
        });
    }

    render() {
        return (
            <div className="sign-up">
                <SignUpForm onAdd={(nick, email, password) => this.addNewUser(nick, email, password)}></SignUpForm>
            </div>
        )
    }
}