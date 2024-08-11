import Person from '../types/Person';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addItem, removeItem } from '../features/checkedItemsSlice';
import PageParams from '../types/PageParams';
import { createUrl } from '../helpers/helper';
import { NavLink } from '@remix-run/react';

const ItemComponent = ({ person, pageParams }: { person: Person; pageParams: PageParams }) => {
  const checkedItems: Person[] = useSelector((state: RootState) => state.checkedItems.value);
  const dispatch = useDispatch();

  const urlParts = person.url.replace(/\/$/, '').split('/');
  const id = urlParts[urlParts.length - 1];
  const activeClassName = id === pageParams.selectedCard?.toString() ? 'active' : '';

  const checked = () => {
    return (
      checkedItems.findIndex((p: Person) => {
        return p.url === person.url;
      }) >= 0
    );
  };

  return (
    <>
      <label className="item-label">
        <input
          type="checkbox"
          checked={checked()}
          onChange={() => {
            checked() ? dispatch(removeItem(person)) : dispatch(addItem(person));
          }}
        />
        <li className="item">
          <a href={createUrl({ ...pageParams, selectedCard: +id })} className={activeClassName}>
            {person.name}
          </a>
        </li>
      </label>
    </>
  );
};

export default ItemComponent;
