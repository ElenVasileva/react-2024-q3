import { NavLink } from 'react-router-dom';
import Person from '../types/Person';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addItem, removeItem } from '../features/selectedItemsSlice';

const ItemComponent = ({ person }: { person: Person }) => {
  const selectedItems = useSelector((state: RootState) => state.selectedItems.value);
  const dispatch = useDispatch();

  const urlParts = person.url.replace(/\/$/, '').split('/');
  const id = urlParts[urlParts.length - 1];

  return (
    <>
      <label className="item-label">
        <input
          type="checkbox"
          checked={selectedItems.indexOf(person) >= 0}
          onChange={() => {
            selectedItems.indexOf(person) >= 0 ? dispatch(removeItem(person)) : dispatch(addItem(person));
          }}
        />
        <li className="item">
          <NavLink to={id}>{person.name}</NavLink>
        </li>
      </label>
    </>
  );
};

export default ItemComponent;
