import React, { Component } from 'react';

export default class Users extends Component {
	constructor(props) {
	    
	    
	    
	    
	    
		super(props);

		this.state = {
			name: '', 
			editable: false,
			key: '',
			users: [
				{
					name: 'Tester One'
				},
				{
					name: 'Tester Two'
				}
			]
		}
	}

	onChange = (e) => {
		this.setState({ name: e.target.value }); 
	}

	onSubmit = (e) => {
		e.preventDefault();
		let { name, users, key, editable } = this.state;
		if(name) {
			if(!editable) {
				users.push({ name: name });
			} else {
				users[key].name = name;
			}

			name = '';
			key = '';
			editable = false;

			this.setState({ users, name, key, editable });	
		}
	}

	onDelete = (key) => {
		let { users } = this.state;
		users.splice(key, 1);

		this.setState({ users });
	}

	onEdit = (key, name) => {
		this.setState({ editable: true, name, key });
	}

	render() {

		return(
			<form onSubmit={this.onSubmit}>
				<input type="text" style={{marginTop: 10, marginLeft: 10}} onChange={this.onChange} value={this.state.name} />	
				<ul>
					{this.state.users.length?this.state.users.map((user, key)=>
						<li key={key}>{user.name} 
						<a onClick={this.onDelete.bind(this, key)} style={{cursor: 'pointer', color: 'blue'}}>
						Delete
						</a> &nbsp; 
						<a onClick={this.onEdit.bind(this, key, user.name)} style={{cursor: 'pointer', color: 'blue'}}>Edit</a>
						</li>): <h4>No data was found.</h4>}
				</ul>
			</form>
		)
	}
}