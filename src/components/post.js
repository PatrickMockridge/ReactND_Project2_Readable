import React, { Component } from "react";
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import { Redirect } from 'react-router'
import { getPost, postPost } from "../actions/index";

const uuid = require('uuid/v1');

class Post extends Component {
  constructor(props) {
    super(props);
    // if not a new post

    this.state = {
        id: null,
        timestamp: null,
        title: null,
        body: null,
        owner: null,
        category: null
    };

    this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
    this.onInputChangeBody = this.onInputChangeBody.bind(this);
    this.onInputChangeOwner = this.onInputChangeOwner.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //this.onPostSubmit = this.onPostSubmit.bind(this);
  }

  onInputChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onInputChangeBody(event) {
    this.setState({ body: event.target.value });
  }

  onInputChangeOwner(event) {
    this.setState({ owner: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.state.post.id = uuid
    this.state.post.timestamp = Date.now()
    this.props.postPost(this.state);
    this.setState({ fireRedirect: true });
  }

  render() {

    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state


    return (
      <form onSubmit={this.onFormSubmit}>
      <div>
        <TextField
          hintText="Title"
          className="form-control"
          value={this.state.title}
          onChange={this.onInputChangeTitle}
        />
      <br />
      <TextField
          hintText="Body"
          multiLine={true}
          rows={10}
          value={this.state.body}
          onChange={this.onInputChangeBody}
        />
      <br />
      <TextField
          hintText="Owner"
          className="form-control"
          value={this.state.owner}
          onChange={this.onInputChangeOwner}
        />
      <br />

      <RaisedButton label="OK" primary={true} />
      </div>

      </form>
      /* {fireRedirect && (
        <Redirect to={from || '/posts'}/>
      )} */
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(Post);
