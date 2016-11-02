'use strict';

import React from'react';
// import { Link } from'react-router';

export default class extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount() {
		this.props.getProducts();
	}

	render () {
		return (
	    <div>
	    Hello
	    </div>
  	)
	}

}