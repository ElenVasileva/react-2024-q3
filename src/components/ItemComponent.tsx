import { NavLink, useSearchParams } from 'react-router-dom';
import Person from '../types/Person';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addItem, removeItem } from '../features/checkedItemsSlice';

const ItemComponent = ({ person }: { person: Person }) => {
  const [searchParams] = useSearchParams();
  const pageNumber = +(searchParams.get('page') || 1);

  const checkedItems = useSelector((state: RootState) => state.checkedItems.value);
  const dispatch = useDispatch();

  const urlParts = person.url.replace(/\/$/, '').split('/');
  const id = urlParts[urlParts.length - 1];

  return (
    <>
      <label className="item-label">
        <input
          type="checkbox"
          checked={checkedItems.indexOf(person) >= 0}
          onChange={() => {
            checkedItems.indexOf(person) >= 0 ? dispatch(removeItem(person)) : dispatch(addItem(person));
          }}
        />
        <li className="item">
          <NavLink to={`${id}?page=${pageNumber}`}>{person.name}</NavLink>
        </li>
      </label>
    </>
  );
};

export default ItemComponent;
