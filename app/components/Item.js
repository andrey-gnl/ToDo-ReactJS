var React = require('react');
var PropTypes = React.PropTypes;

function Item(props) {
	var itemClass = "list-group-item clearfix task-item js-item";
	if(props.isDone) {
		itemClass += ' is-done'
	}
	return (
			<div className={itemClass} data-id={props.id}>
				<div className="row">
					<div className="col-xs-9" style={{display: 'inline-block', verticalAlign: 'middle', float: 'none'}}>
						<h4>{props.text}</h4>
					</div>
					<div className="col-xs-3" style={{display: 'inline-block', verticalAlign: 'middle', float: 'none'}}><div className="btn-group" style={{float: 'right'}}>
						<button type="button" className="btn btn-default glyphicon glyphicon-remove"  onClick={props.onRemove}></button>
						<button type="button" className="btn btn-default btn_done glyphicon glyphicon-ok"  onClick={props.onDone}></button>
					</div></div>
				</div>

			</div>

	)
}

Item.propTypes = {
	text: PropTypes.string,
	onDone: PropTypes.func,
	onRemove: PropTypes.func,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])

};

module.exports = Item;