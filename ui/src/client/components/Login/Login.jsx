import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <form onsubmit="">
                    <label>Aadhaar Number/Email:</label>
                    <input type="text" id="userid" minLength="5" maxLength="50"/>
                    <label>Password</label>
                    <input type="password" minLength="8" maxLength="25"/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login