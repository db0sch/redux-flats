import React from 'react';
import FlatList from '../containers/flat_list.jsx';
import GoogleMap from '../containers/google_map.jsx';
import flats from '../data/flats.js'

const App = () => {
  return (
    <div className="row">
      <div className="app">
        <FlatList/>
        <GoogleMap/>
      </div>
    </div>
  );
};

export default App;
