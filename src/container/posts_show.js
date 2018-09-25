import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from './../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    // Verify if exist a post for this Id
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
    // this.onDeletePost = this.onDeletePost.bind(this);
  }
  onDeletePost() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div className="col mt-4">Loading...</div>;
    }
    return (
      <div className="col mt-4">
        <div className="d-flex flex-row justify-content-between   align-items-center mb-2">
          <div>
            <Link
              to="/"
              className="text-primary">
              Back to List
            </Link>
            <h3>{post.title}</h3>
          </div>
          <button
            className="btn btn-sm btn-danger"
            onClick={this.onDeletePost.bind(this)}>
            Delete Post
          </button>
        </div>
        <small>Categories: {post.categories}</small>
        <p>{post.content}</p>
      </div>
    )
  }
}
// Ownsprops === this.props (Its the same props of the class)
const mapState = ({posts}, ownProps) => {
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapState, {fetchPost, deletePost})(PostsShow);