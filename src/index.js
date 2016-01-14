// Get me access to react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


// import custom components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// npm install --save youtube-api-search
const API_KEY = 'AIzaSyB90AZGcP9JX5mqW2b6F-T-crfz6OY2pdY';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos})
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it 
// on the page (in THE DOM)

ReactDOM.render(<App />, document.querySelector('.container'));