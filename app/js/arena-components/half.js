var React = require('react');
var Avatar = require('./avatar');
var Actions = require('./actions');

const Half = React.createClass({
	render:function () {
		var hero = this.props.hero;
		const className = this.props.half + '-player';

		return (
			<div className={className} >
				<Avatar name={hero.name} id={hero.id} />
				<Actions elements={hero.elements} cards={hero.cards} slots={hero.slots} half={this.props.half} disabled={!hero.active} />
			</div>
			);
	}
});

module.exports = Half;