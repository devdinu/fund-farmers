import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        console.log(email);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" ref="email" minLength="5" maxLength="50"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" ref="password" minLength="8" maxLength="25"/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login