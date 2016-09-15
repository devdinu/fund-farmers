import React, {Component} from 'react';
import {render} from 'react-dom';

class Register extends Component {
    render() {
        return (
            <div>
                <div id="aadhaar-login-form">
                    <form onSubmit="">
                        <div>
                            <label>Aadhaar Number:</label>
                            <input type="text" id="aadhaarNo" minLength="12" maxLength="12"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" id="email"/>
                        </div>
                        <div>
                            <input type="radio" name="usetype" value="farmer"/> Farmer<br/>
                            <input type="radio" name="usetype" value="buyer" checked/> Buyer<br/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" minLength="8" maxLength="25"/>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
                OR
                <div id="user-login-form">
                    <form onSubmit="">
                        <div>
                            <label>Full Name:</label>
                            <input type="text" id="name" minLength="6" maxLength="50"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" id="email"/>
                        </div>
                        <div>
                            <input type="radio" name="usetype" value="farmer"/> Farmer<br/>
                            <input type="radio" name="usetype" value="buyer" checked/> Buyer<br/>
                        </div>
                        <div>
                            <label>Address:</label>
                            <textarea id="address" rows="5" cols="70"></textarea>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" minLength="8" maxLength="25"/>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

// render(<Register/>, document.getElementById('register'));

export default Register