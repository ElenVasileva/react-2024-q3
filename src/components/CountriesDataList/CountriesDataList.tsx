import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CountriesDataList = () => {
  const countries = useSelector((state: RootState) => state.countries.value);

  return (
    <datalist id="countries">
      {countries.map((country) => (
        <option value={country} key={country} />
      ))}
    </datalist>
  );
};

export default CountriesDataList;
