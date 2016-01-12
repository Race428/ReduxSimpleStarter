// Get me access to react
import React from 'react';
import ReactDOM from 'react-dom';

// import custom components
import SearchBar from './components/search_bar';

// npm install --save youtube-api-search
const API_KEY = 'AIzaSyB90AZGcP9JX5mqW2b6F-T-crfz6OY2pdY';

// Create a new component.  This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    )
}

// Take this component's generated HTML and put it 
// on the page (in THE DOM)

ReactDOM.render(<App />, document.querySelector('.container'));