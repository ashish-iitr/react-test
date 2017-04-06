import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { login } from '../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        window.isLoading = false;
    }

    onSubmit(e) {
        e.preventDefault();
        window.isLoading = true;
        this.props.login(this.state);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {email, password} = this.state;
        return(
			<form onSubmit={this.onSubmit}>
                <h1>LogIn</h1>
				<div className="form-group">
				{/* <label>Name:</label>*/}
				<input type="text" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" required/>
				</div>
				<div className="form-group">
				{/* <label>Password:</label>*/}
				<input type="password" className="form-control" name="password" value={password} onChange={this.onChange} placeholder="Password" required/>
				<div className="form-group"><button className="btn btn-primary btn-lg" disabled={window.isLoading}>LogIn</button></div>
		    	</div>
		    </form>
		);
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, {login})(LoginForm);
