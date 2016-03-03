import React from 'react';
import { connect } from 'react-redux';
import { endTurn } from '../actions/actions';
var HTML5Backend = require('react-dnd-html5-backend');
var DragDropContext = require('react-dnd').DragDropContext;
var Deck = require('./deck');
var Half = require('./half');

const Arena = React.createClass({
  render: function() {
  	const heroTop = this.props.heroes[0];
  	const heroBottom = this.props.heroes[1];

    return (
      <div className="arena">
		<Half hero={heroTop} half={'top'} />
		<Deck player={'top'} hide={true} />
		<Half hero={heroBottom} half={'bottom'} />
		<Deck player={'bottom'} hide={true} />
		<button className="end" onClick={this.onClick} text="End"> End Turn </button>
	  </div>
    );
  },

  onClick: function () {
  	this.props.dispatch(endTurn());
  }
});

const mapStateToProps = (state) => {
	return {
		heroes: state
	}
}

const ConnectedArena = connect(mapStateToProps)(Arena);

export default DragDropContext(HTML5Backend)(ConnectedArena);