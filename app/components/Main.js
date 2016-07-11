var React = require('react');

function Main(props) {
	return (
		<div className="row">
			<div className="col-sm-4 col-sm-offset-4">
				<div className="text-center">
					<h1>Todo-List</h1>
				</div>
				{props.children}
			</div>
		</div>

	)
}

module.exports = Main;