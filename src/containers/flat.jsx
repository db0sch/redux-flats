import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.selectFlat(this.props.flat)
  }

  render() {
    const style = { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`}
    let classes = "flat"
    if (this.props.selectedFlat === this.props.flat) {
      classes += " selected"
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="card" style={style}>
          <div className="card-description">
            <h2>{this.props.flat.name}</h2>
            <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
 { selectFlat: selectFlat }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);

