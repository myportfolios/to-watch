import React, { Component } from "react";
import { CLIENT_ID, SCOPES } from "services/constants";
import { connect } from "react-redux";
import { signIn, signOut } from "store/actions/moviesAction";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID.ID,
          scope: SCOPES.EMAIL
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  onAuthChange = isSignedIn => {
    const userId = this.auth.currentUser.get().getId();
    const userName = this.auth.currentUser.get().getBasicProfile().ig;
    isSignedIn && this.props.signIn(userId, userName);
    !isSignedIn && this.props.signOut();
  };
  renderAuthButton = () => {
    return (
      <div>
        {this.props.isSignedIn ? (
          <button
            className="ui blue google button"
            onClick={this.onSignOutClick}
          >
            Sign Out
          </button>
        ) : !this.props.isSignedIn ? (
          <button onClick={this.onSignInClick}>Sign In with Google</button>
        ) : null}
      </div>
    );
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
export const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
