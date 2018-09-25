import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from './../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPost() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item list-group-item-action"
          key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="col mt-4">
        <div className="d-flex flex-row justify-content-between align-items-center mb-4">
          <h3>Post List</h3>
          <Link
            to="/posts/new"
            className="btn btn-primary btn-sm">
            New Post
          </Link>
        </div>
        <ul className="list-group">
          {this.renderPost()}
        </ul>
      </div>
    )
  }
}

const mapState = ({posts}) => {
  return {
    posts
  }
}

export default connect(mapState, {fetchPosts})(PostsIndex);