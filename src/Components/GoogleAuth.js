import React, { Component } from "react";
import { CLIENT_ID, SCOPES, BTN_TEXT_STATUS } from "services/constants";

export default class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
    authStatus: null
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID.ID,
          scope: SCOPES.EMAIL
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  signInBtnHandler = async e => {
    if (
      e.target.textContent === BTN_TEXT_STATUS.GOOGLE_AUTH ||
      e.target.textContent === BTN_TEXT_STATUS.SIGN_IN
    ) {
      await this.auth.signIn();
      await this.setState({ isSignedIn: this.auth.isSignedIn.get() });

      return;
    }
    if (e.target.textContent === BTN_TEXT_STATUS.SIGN_OUT) {
      await this.auth.signOut();
      await this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      return;
    }
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn === null ? (
          <button onClick={this.signInBtnHandler}>Google Auth</button>
        ) : this.state.isSignedIn === true ? (
          <>
            <button onClick={this.signInBtnHandler}>Signed In</button>
            <button onClick={this.signInBtnHandler}>Sign Out</button>
          </>
        ) : this.state.isSignedIn === false ? (
          <button onClick={this.signInBtnHandler}>Signed Out</button> && (
            <button onClick={this.signInBtnHandler}>Sign In</button>
          )
        ) : null}
      </div>
    );
  }
}
