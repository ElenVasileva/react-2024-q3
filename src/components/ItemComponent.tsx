import { NavLink } from 'react-router-dom';
import Person from '../types/Person';

const ItemComponent = ({ person }: { person: Person }) => {
  const urlParts = person.url.replace(/\/$/, '').split('/');
  const id = urlParts[urlParts.length - 1];
  return (
    <li className="item">
      <NavLink to={id}>{person.name}</NavLink>
    </li>
  );
};

export default ItemComponent;
