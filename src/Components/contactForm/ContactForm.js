import React, { Component } from "react";
import firebase from "firebase";
import "./main.css";

const db = firebase.firestore();

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      doubt: ""
    };
  }
  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  submitForm = event => {
    event.preventDefault();
    db.collection("queries")
      .doc()
      .set({
        email: this.state.email,
        doubt: this.state.doubt
      })
      .then(() => {
        window.M.toast({ html: "We have saved your queries" });
      })
      .catch(() => {
        window.M.toast({ html: "Something went wrong!" });
      });
  };
  render() {
    return (
      <div className="container" style={{ padding: "10px" }}>
        <h4
          style={{ color: "#1a1a1a", textAlign: "center", color: "Dodgerblue" }}
        >
          <b>Ask Your Queries!</b>
        </h4>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="email"
                  type="email"
                  class="validate"
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  id="doubt"
                  class="materialize-textarea"
                  value={this.state.doubt}
                  onChange={this.onChangeHandler}
                />
                <label for="doubt">Doubt</label>
              </div>
            </div>
            <div className="row center-align">
              <button className="btn blue" onClick={this.submitForm}>
                Submit your queries
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
