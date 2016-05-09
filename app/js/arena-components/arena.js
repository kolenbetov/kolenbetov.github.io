import React from 'react';
import { connect } from 'react-redux';
import { endTurn, heroAttack, putCreature } from '../actions/actions';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Deck from './deck';
import Half from './half';

class Arena extends React.Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
  	const heroTop = this.props.heroes[0];
  	const heroBottom = this.props.heroes[1];

    return (
      <div className="arena">
  		  <Half hero={heroTop} half={'top'} dropCard={this.props.onDropCard} />
  		  <Deck player={'top'} used_card={heroTop.used_card} />
  		  <Half hero={heroBottom} half={'bottom'} dropCard={this.props.onDropCard} />
  		  <Deck player={'bottom'} used_card={heroBottom.used_card} />
  		  <button className="end" onClick={this.handleClick} text="End"> End Turn </button>
  	  </div>
    );
  }

  handleClick() {
  	this.props.heroAttack();
    this.props.endTurn();
  }
};

const mapStateToProps = (state) => {
	return {
		heroes: state
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDropCard: (card, index) => {
      dispatch(putCreature(card, index)) 
    },
    heroAttack: () => {
      dispatch(heroAttack())
    },
    endTurn: () => {
      dispatch(endTurn())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(Arena));