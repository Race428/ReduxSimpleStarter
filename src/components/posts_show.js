import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  
  componentWillMount() {
    const id = this.props.params.id;

    this.props.fetchPosts(id);
  }

  render() {
    return (
      <div>
        Show post {this.props.params.id} 
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsShow);