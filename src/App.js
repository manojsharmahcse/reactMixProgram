import React, { Component } from 'react';
import Details from './Details';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Deepak',
			address: 'Phase 11'
		}
	}

	onClick = (val, val2) => {
		alert(val + '/'+val2)
	}

	render() {
		const  { name, address } = this.state;

		return(
			<React.Fragment>
				<Details name={name} address={address} />
				<button onClick={this.onClick.bind(this, 1, 2)}>Click</button>
			</React.Fragment>
		)
	}
}