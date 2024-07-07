import { Component } from 'react'
import { Person } from '../App';

class SearchComponent extends Component<{isLoading: boolean, data: Person[]}> {
  
  render() {
    if (this.props.isLoading)
      return <>Loading...</>
    const listItems = this.props.data.map((person: Person) => { 
      return <li key={person.name}>
      <p>
        <b>{person.name}:</b>
        {' height: ' + person.height + ', mass: ' + person.mass}
      </p>
    </li>});
    return <>
    <ul>{listItems}</ul>
  </>;
  }
}

export default SearchComponent
