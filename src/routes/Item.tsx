import { LoaderFunction, LoaderFunctionArgs, NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import { getItem } from '../api';
import { Person } from '../App';
import GlobalSpinner from '../components/GlobalSpinner';

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const item = await getItem(+(params.itemId || 1));
  return item;
};

function Item() {
  const navigation = useNavigation();
  const item = useLoaderData() as Person;
  return (
    <>
      {navigation.state === 'loading' && <GlobalSpinner />}
      {navigation.state !== 'loading' && (
        <div id="details" className="details">
          <div className="details-header">
            {item.name}
            <NavLink to={'/'}>x</NavLink>
          </div>
          <div>Height: {item.height}</div>
          <div>Weight: {item.mass}</div>
          <div>Gender: {item.gender}</div>
          <div>Hair color: {item.hair_color}</div>
          <div>Skin color: {item.skin_color}</div>
        </div>
      )}
    </>
  );
}

export default Item;
