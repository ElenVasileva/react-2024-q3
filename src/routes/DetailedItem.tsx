import { NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import GlobalSpinner from '../components/GlobalSpinner/GlobalSpinner';
import Person from '../types/Person';

const DetailedItem = () => {
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
};

export default DetailedItem;
