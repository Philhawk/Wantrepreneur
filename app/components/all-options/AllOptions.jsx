'use strict';

import React from'react';
import Navbar from '../navbar/Navbar';

export default class extends React.Component {
	constructor (props) {
		super(props);
    this.state = {
      search: ''
    };
    this.onSearchInput = this.onSearchInput.bind(this);
	}

	componentDidMount() {
		this.props.getProducts();
	}

	render () {
    return (
      <div>
        <Navbar />
        <div className="container">
          <input
            placeholder="Search bar placeholder text"
            onInput={ this.onSearchInput }
          />
          {
            this.props.products
              .filter(p => p.name.toLowerCase().includes(this.state.search)
                || p.description.toLowerCase().includes(this.state.search)
                || p.categories
                    .reduce((a, b) => a + b.name, '')
                    .toLowerCase()
                    .includes(this.state.search)
              )
              .map(p => {
                return (
                  <div className="row">
                    { p.name }
                    { p.categories.map(c => c.name) }
                    { <img src={p.image} />}
                    { p.description }
                  </div>
                )
            })
          }
        </div>
      </div>
  	)
	}

  onSearchInput(evt) {
    this.setState({ search: evt.target.value.toLowerCase() });
  }
}
