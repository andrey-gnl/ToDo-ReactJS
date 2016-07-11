var React = require('react');
var Main = require('../components/Main');
var Input = require('../components/Input');
var Item = require('../components/Item');

var MainContainer = React.createClass({

	getInitialState: function() {
		this.arrayOfTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		return {
			tasks: this.arrayOfTasks
		}
	},

	handlerAdd: function() {
		var textInput = document.querySelector('.js-task-text');
		if(textInput.value === '') return false;
		var object = {
			text: textInput.value,
			isDone: false
		};

		this.arrayOfTasks.unshift(object);

		this.setState({
			tasks: this.arrayOfTasks
		});

		textInput.value = '';
		localStorage.setItem('tasks', JSON.stringify(this.arrayOfTasks));
	},

	handlerRemove: function(e) {
		e.stopPropagation();
		var index = +e.target.closest('.js-item').dataset.id;

		this.arrayOfTasks.splice(index, 1);
		this.setState({
			tasks: this.arrayOfTasks
		});

		localStorage.setItem('tasks', JSON.stringify(this.arrayOfTasks));

	},
	handlerDone: function(e) {
		e.preventDefault();
		var item = e.target.closest('.js-item');
		var index = +e.target.closest('.js-item').dataset.id;

		if (this.arrayOfTasks[index].isDone) {

			this.arrayOfTasks[index].isDone = false;

			this.setState({
				tasks: this.arrayOfTasks
			})
		} else {

			this.arrayOfTasks[index].isDone = true;

			this.setState({
				tasks: this.arrayOfTasks
			})

		}

		localStorage.setItem('tasks', JSON.stringify(this.arrayOfTasks));


	},
	render: function() {
		var tasksElement = function () {
			if (this.state.tasks.length > 0) {
				return (
					<div className="panel panel-default" style={{marginTop: 20}}>
						<div className="list-group">
							{
								this.state.tasks.map(function(item, i){
									return (
										<Item
											text={item.text}
											key={i}
											id={i}
											isDone={item.isDone}
											onDone={this.handlerDone}
											onRemove={this.handlerRemove}
										/>
									)
								}.bind(this))
							}
						</div>
					</div>
				)
			} else {
				return '';
			}
		}.bind(this);

		return (
			<Main>
				<Input onClick={this.handlerAdd} />

				{tasksElement()}

			</Main>
		)
	}
});

module.exports = MainContainer;