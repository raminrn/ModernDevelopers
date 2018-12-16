import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./Landing.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 text-center home-left">
                <h1 className="display-4 mb-4 heading">Modern Developers</h1>
                <p className="lead home-description">
                  {" "}
                  <i class="fas fa-search" /> Make a personal developer
                  portfolio <br />
                  <i class="fas fa-pencil-alt" /> Share posts <br />
                  <i class="fas fa-users" />
                  And make friends <br />
                </p>
              </div>
              <div className="col-md-6 text-center home-right">
                <h3 className="display-4 mb-4 heading-left">Join now</h3>
                <p className="lead">
                  {" "}
                  And explore the developer world!<br />
                </p>
                <Link
                  to="/register"
                  className="btn btn-lg btn-info btn-outline mr-2 sign-in"
                >
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-outline-secondary">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
