import React, {Component} from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.aadhaarRegistration = this.aadhaarRegistration.bind(this);
        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    aadhaarRegistration(event) {
        event.preventDefault();
    }

    register(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.state.userType = event.target.value;
    }

    render() {
        return (
            <div>
                <div id="aadhaar-login-form">
                    <form onSubmit={this.aadhaarRegistration}>
                        <div>
                            <label>Aadhaar Number:</label>
                            <input type="text" ref={(ref) => this.aadhaarNo = ref} minLength="12" maxLength="12" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" ref={(ref) => this.email = ref}/>
                        </div>
                        <div>
                            <input type="radio" name="usertype" value="farmer" onChange={this.handleChange}/> Farmer<br/>
                            <input type="radio" name="usertype" value="buyer" onChange={this.handleChange}/> Buyer<br/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" ref={(ref) => this.password = ref} minLength="8" maxLength="25"/>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                OR
                <div id="user-login-form">
                    <form onSubmit={this.register}>
                        <div>
                            <label>Full Name:</label>
                            <input type="text" ref="name" minLength="6" maxLength="50"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" ref="email"/>
                        </div>
                        <div>
                            <input type="radio" name="usertype" value="farmer" onChange={this.handleChange}/> Farmer<br/>
                            <input type="radio" name="usertype" value="buyer" onChange={this.handleChange}/> Buyer<br/>
                        </div>
                        <div>
                            <label>Address:</label>
                            <textarea id="address" ref="address" rows="5" cols="70"></textarea>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" ref="password" minLength="8" maxLength="25"/>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register