import { Outlet } from 'react-router-dom';
import ItemComponent from './ItemComponent';
import Person from '../types/Person';

const CardListComponent = ({ data }: { data: Person[] }) => {
  const listItems = data.map((person: Person) => {
    return <ItemComponent key={person.name} person={person} />;
  });
  const itemsView = listItems.length ? <ul>{listItems}</ul> : <div>No data</div>;

  return (
    <>
      <div className="items-view">{itemsView}</div>
      <Outlet />
    </>
  );
};

export default CardListComponent;
