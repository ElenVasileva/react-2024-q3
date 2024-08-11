import PageParams from '../../types/PageParams';
import Person from '../../types/Person';
import ItemComponent from '../ItemComponent';

const CardListComponent = ({ data, pageParams }: { data: Person[]; pageParams: PageParams }) => {
  const listItems = data.map((person: Person) => {
    return <ItemComponent key={person.name} person={person} pageParams={pageParams} />;
  });
  const itemsView = listItems.length ? <ul>{listItems}</ul> : <div>No data</div>;

  return (
    <>
      <div className="items-view">{itemsView}</div>
    </>
  );
};

export default CardListComponent;
