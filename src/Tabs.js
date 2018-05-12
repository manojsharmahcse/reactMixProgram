import React, {Component} from 'react'

export default class App extends Component{
	 state ={
	 	tab :1
	 }

	 renderTab=() =>{
	 	switch(this.state.tab){
			case 1: return<p>tab 1</p>
			case 2: return<p>tab 2</p>
			case 3: return<p>tab 3</p>
			default : return<p>tab 3</p>
	 	}

	 }


	render(){
		return(
			<React.Fragment>
					<div>
						<button onClick={()=> this.setState ({tab:1})} className={this.state.tab === 1?'active':null}>Tab 1</button>

						<button onClick={()=> this.setState ({tab:2})} className={this.state.tab === 2?'active':null}>Tab 2</button>

						<button onClick={()=> this.setState ({tab:3})} className={this.state.tab === 3?'active':null}>Tab 3</button>

					</div>
				<div>
					{this.renderTab()}
				</div>
			</React.Fragment>
			)
	 }

}
