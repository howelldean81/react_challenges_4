import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
  }


  searchFunction(e) {
    this.setState({
      searchTerm: (e)
    })
  }

  render() {
    return (
      <div>
        <Input placeholder='Search Here' onChange={(e) => this.searchFunction(e.target.value)}/>
        
        <h3>Results:</h3>
        {this.state.things.filter()}
      </div>
    )
  }
}
 
export default SearchIndex;
