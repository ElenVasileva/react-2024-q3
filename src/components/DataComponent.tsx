import { Person } from '../App';

function SearchComponent({ isLoading = true, data = [] }) {
  if (isLoading) return <>Loading...</>;
  const listItems = data.map((person: Person) => {
    return (
      <li key={person.name}>
        <p>
          <b>{person.name}:</b>
          {' height: ' + person.height + ', mass: ' + person.mass}
        </p>
      </li>
    );
  });
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default SearchComponent;
