var React = require('react');

function Main(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2">
					<div className="text-center">
						<h1>Todo-List</h1>
					</div>
					{props.children}
				</div>
			</div>
		</div>

	)
}

module.exports = Main;