import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
        comment_text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { comment_text } = this.state;
    return (
      <form id="comment-form">
        <Input
          text="comment text"
          label="commenttext"
          type="text"
          id="commenttext"
          value={comment_text}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("create-comment-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
