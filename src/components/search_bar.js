// request access to React
// const Component = React.Component
import React, { Component } from 'react';

// Same thing as React.Component
class SearchBar extends Component {
  render () {
    return (
      <input onChange={event => console.log(event.target.value)} />
    )
  }
}

// allow other components to use SearchBarComponent
export default SearchBar;