var React = require('react');

function Input (props) {

	return (
		<div className="input-group">
			<input type="text" className="form-control js-task-text" placeholder="Add task to list" aria-describedby="input-addon" />
			<span className="input-group-btn">
				<button className="btn btn-default" type="button" onClick={props.onClick}>Add</button>
			</span>
		</div>
	)

}


module.exports = Input;

