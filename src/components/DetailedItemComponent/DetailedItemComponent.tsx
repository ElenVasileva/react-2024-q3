import { NavLink, useSearchParams } from 'react-router-dom';
import Person from '../../types/Person';

const DetailedItemComponent = ({ person }: { person: Person }) => {
  const [searchParams] = useSearchParams();
  const pageNumber = +(searchParams.get('page') || 1);

  return (
    <>
      <div id="details" className="details">
        <div className="details-header">
          {person.name}
          <NavLink to={`/?page=${pageNumber}`}>x</NavLink>
        </div>
        <div>Height: {person.height}</div>
        <div>Weight: {person.mass}</div>
        <div>Gender: {person.gender}</div>
        <div>Hair color: {person.hair_color}</div>
        <div>Skin color: {person.skin_color}</div>
      </div>
    </>
  );
};

export default DetailedItemComponent;
