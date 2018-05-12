import React from 'react';

const Details = (props) => {
	
	const { name, address } = props;
	return(
		<React.Fragment>
			<p>{name}</p>
			<p>{address}</p>		
		</React.Fragment>
	)
}

export default Details;