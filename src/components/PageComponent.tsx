import { LoaderFunction, LoaderFunctionArgs, NavLink, Outlet } from 'react-router-dom';
import { Person } from '../App';
import { getItems } from '../api';

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const item = await getItems(+(params.page || 1), localStorage.getItem('search') || '');
  return item;
};

function PageComponent({ data }: { data: Person[] }) {
  const listItems = data.map((person: Person) => {
    const urlParts = person.url.replace(/\/$/, '').split('/');
    return (
      <li key={person.name} className="item">
        <NavLink to={urlParts[urlParts.length - 1]}>{person.name}</NavLink>
      </li>
    );
  });
  return (
    <>
      <ul>{listItems}</ul>
      <Outlet />
    </>
  );
}

export default PageComponent;
