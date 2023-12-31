import React, { Component } from 'react';
import MadLibsForm from './MadLibsForm';
import MadLibsStory from './MadLibsStory';


class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			words : {},
			story : ''
		};
	}

	updateStory = (newStory) => {
		this.setState({ story: newStory });
	};

	render () {
		return (
			<div className="App">
				<h1>Madlibs Game</h1>
				<MadLibsForm updateStory={this.updateStory} />
				<MadLibsStory story={this.state.story} />
			</div>
		);
	}
}

export default App;
