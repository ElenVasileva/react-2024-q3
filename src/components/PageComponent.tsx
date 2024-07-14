import { NavLink, Outlet } from 'react-router-dom';
import { Person } from '../App';

const PageComponent = ({ data }: { data: Person[] }) => {
  const listItems = data.map((person: Person) => {
    const urlParts = person.url.replace(/\/$/, '').split('/');
    return (
      <li key={person.name} className="item">
        <NavLink to={urlParts[urlParts.length - 1]}>{person.name}</NavLink>
      </li>
    );
  });
  const itemsView = listItems.length ? <ul>{listItems}</ul> : <div>No data</div>;

  return (
    <>
      <div className="items-view">{itemsView}</div>
      <Outlet />
    </>
  );
};

export default PageComponent;
