// request access to React
// const Component = React.Component
import React, { Component } from 'react';

// Same thing as React.Component
class SearchBar extends Component {
  constructor(props){
    // Calling parent 'Components' props/method
    super(props);

    this.state = {
      term: ''
    };
  }

  render () {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value })} />
      </div>
    );
  }
}

// allow other components to use SearchBarComponent
export default SearchBar;