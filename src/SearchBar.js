import React, { Component } from 'react';

export default class SearchBar extends Component {//constructor dos metodos en el render el cheboox y el campo de text

	constructor(props){
		super(props);
	
		this.handleInstockInputChange=this.handleInstockInputChange.bind(this);
		this.handleFilterTextInputChange=this.handleFilterTextInputChange.bind(this);

	}
	handleInstockInputChange(e){
		this.props.inStock(e.target.checked);

	}
	handleFilterTextInputChange(e){
		this.props.onFilterText(e.target.value);
//placeholder="search...."

	}



	render(){
		return(
				
				<div>
					<input type="text"   onChange={this.handleFilterTextInputChange} value={this.props.filterText}/>
					<input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInstockInputChange}/>
					
				</div>
			);



	}
	
}