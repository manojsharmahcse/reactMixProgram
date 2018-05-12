import React, {Component} from 'react';

export default class App extends Component{
	
	constructor(props){
		super(props);
		
		this.state ={
			hide : true
		}

	}	

	toggle = () =>{
		this.setState({
			hide : !this.state.hide
		})

	}

	render(){
		return(
			 <React.Fragment>

			 	{this.state.hide?<div>custome data here</div>:null}

			 	<button onClick={this.toggle}>
				 	{this.state.hide?'power on':'Show'}
			 	</button>

			 </React.Fragment>
			 )			
	}

}
