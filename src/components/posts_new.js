import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // const handleSubmit = this.props.handleSubmit;
    // const title = this.props.fields.title

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create a New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} />
            <label>Content</label>
            <textarea className="form-control" {...content} />
          </div>
          <button type="submit" classNae="btn btn-primary">Submit</button> 
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
})(PostsNew);

// Name of form does not need to match

// user types something in...record it on application state

// state === {
//   form: {
//     PostsNewForm: {
//       title: '....',
//       categories: '....',
//       content: '.....'
//     }
//   }
// }