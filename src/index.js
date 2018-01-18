import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAul_r7JHIIsdazdALK_8cF3DpHgF3d27U';

// Create a new component.  This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's HTML and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
