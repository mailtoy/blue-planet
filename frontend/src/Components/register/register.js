import React, { Component } from 'react';
import { Tooltip, Icon, Checkbox } from 'antd';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            password2: '',
            firstName: '',
            lastName: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Link to="/" className="btn-flat waves-effect">Back to home</Link>
                <p>
                    Already have an account?
                    <Link to="/login">Log in</Link>
                </p>
                <h3>Register</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <span className="red-text">{errors.email}</span>
                        <input type="email"

                            id="email"
                            className={classnames("", { invalid: errors.email })}
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}

                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <span className="red-text">{errors.password}</span>
                        <input type="password"
                            id="password"
                            className={classnames("", { invalid: errors.password })}
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <span className="red-text">{errors.password2}</span>
                        <input type="password"
                            id="password2"
                            className={classnames("", { invalid: errors.password2 })}
                            value={this.state.password2}
                            onChange={this.onChange}
                            error={errors.password2}
                        />
                    </div>
                    <div>
                        <label> Username </label>
                        <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        :&nbsp;
                        <input type="username" />
                    </div>
                    <div>
                        <label> Habitual Residence: </label>
                        <input type="residence" />
                    </div>
                    <div>
                        <label> Phone number: </label>
                        <input type="phone" />
                    </div>

                    <div className="form-group">
                        <label>First name: </label>
                        <span className="red-text">{errors.firstName}</span>
                        <input type="text"
                            id="firstName"
                            className={classnames("", { invalid: errors.firstName })}
                            value={this.state.firstName}
                            onChange={this.onChange}
                            error={errors.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last name: </label>
                        <span className="red-text">{errors.lastName}</span>
                        <input type="text"
                            id="lastName"
                            className={classnames("", { invalid: errors.lastName })}
                            value={this.state.lastName}
                            onChange={this.onChange}
                            error={errors.lastName}
                        />
                    </div>
                    <div>
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));;