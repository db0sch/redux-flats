import React, { Component } from 'react';
import Flat from './flat.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    this.props.setFlats();
  }

  render() {
    return (
      <div className="col-sm-7">
        <div className="flat-list">
          {this.props.flats.map((flat) => {
            return <Flat key={flat.name} flat={flat} />
          })}
        </div>
      </div>
    );
  }
};

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { setFlats: setFlats },
      dispatch
    );
  }

  function mapStateToProps(state) {
    return {
      flats: state.flats
    };
  }


// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(FlatList);


