import React from "react";
import { Form } from "react-bootstrap";
import { saveUserDetailsToStore } from "store/actions/moviesAction";
import { connect } from "react-redux";
import axios from "axios";

class RegistrationForm extends React.Component {
  //set input state based on input field
  handleUserInput = e => {
    const name = e.target.name,
      value = e.target.value;
    this.props.saveUserDetailsToStore(name, value);
  };

  render() {
    console.log(this.props && this.props.fullname);
    console.log(this.props && this.props.email);
    console.log(this.props && this.props.password);
    console.log(this.props && this.props.password2);
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
        style={{
          width: "500px",
          height: "auto",
          padding: "2rem",
          backgroundColor: "blue",
          position: "relative",
          marginBottom: "20px" //delete later
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            style={{ marginBottom: "1rem" }}
            onChange={e => {
              this.handleUserInput(e);
            }}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            style={{ marginBottom: "1rem" }}
            onChange={e => {
              this.handleUserInput(e);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            style={{ marginBottom: "1rem" }}
            onChange={e => {
              this.handleUserInput(e);
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            style={{ marginBottom: "2rem" }}
            onChange={e => {
              this.handleUserInput(e);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            left: "50%",
            bottom: "-5px"
          }}
        >
          <button
            style={{
              display: "block",
              marginRight: "1rem",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            // onClick={} action to save user details to DB
          >
            Register
          </button>
          <button
            style={{
              display: "block",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      </Form>
    );
  }
}

// const registerNewUser = userObj => {
//   // axios
//   //   .post("http://localhost:5000/api/users/register", { userObj })
//   //   .then(res => {
//   //     console.log(res);
//   //   });
//   console.log(userObj);
// };

const mapStateToProps = state => {
  return {
    fullname: state.newUserDetails.fullname,
    email: state.newUserDetails.email,
    password: state.newUserDetails.password,
    password2: state.newUserDetails.password2
  };
};
export default connect(mapStateToProps, { saveUserDetailsToStore })(
  RegistrationForm
);
