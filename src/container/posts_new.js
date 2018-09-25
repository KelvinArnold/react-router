import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createPost } from './../actions';

class PostNew extends Component {
  constructor(props) {
    super(props);
  }
  renderField(field) {
    const { meta: {touched, invalid, error} } = field;
    const classInputError = `${touched && invalid ? 'is-invalid': ''}`;
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
          className={`form-control ${classInputError}`}/>
        <small className="text-danger">
          {touched && invalid ? `Error: ${error}` : ''}
        </small>
      </div>
    )
  }
  onSubmitForm(values) {
    console.log(values);
    this.props.createPost(values, () =>
      this.props.history.push('/'));
  }
  render() {
    // "handleSubmit" its a function passed for reduxForm
    const { handleSubmit } = this.props;
    return (
      <div className="col mt-4">
        <div className="d-flex">
          <h5>New Post</h5>
        </div>
        <div>
          <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
            <Field
              name="title"
              label="Title"
              component={this.renderField}/>
            <Field
              label="Category"
              name="categories"
              component={this.renderField}/>
            <Field
              label="Content"
              name="content"
              component={this.renderField}/>
            <button
              type="submit"
              className="btn btn-primary">
              Save
            </button>
            <Link
              to="/"
              className="btn btn-white">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    )
  }
}
// values: all values who the user enter in the form
const validate = values => {
  console.log(values);
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  };
  if (!values.category) {
    errors.category = 'Required';
  };
  if (!values.content) {
    errors.content = 'Required';
  };
  return errors;
}
// reduxForm past all his properties to the Class "PostNew"
export default reduxForm({
  form: 'postNewForm', // It's unique
  validate
})(
  connect(null, { createPost })(PostNew)
);