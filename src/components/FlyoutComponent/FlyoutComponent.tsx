import './FlyoutComponent.css';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { unselectAll } from '../../features/checkedItemsSlice';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';
import Person from '../../types/Person';

const FlyoutComponent = () => {
  const theme = useContext(ThemeContext);
  const checkedItems = useSelector((state: RootState) => state.checkedItems.value);
  const dispatch = useDispatch();

  const createFile = (checkedItems: Person[]) => {
    const separator = ',';
    let dataString = `Name${separator}Gender${separator}Height\n`;
    dataString += checkedItems
      .map((person: Person) => {
        return `${person.name}${separator}${person.gender}${separator}${person.height}`;
      })
      .join('\n');
    return URL.createObjectURL(new Blob([dataString]));
  };

  return (
    <div className={`flyout flyout-${theme}`}>
      <div className={checkedItems.length ? 'shown' : ''}>
        <div className="flyout-content">
          {checkedItems.length} items selected
          <ButtonComponent
            onClick={() => {
              dispatch(unselectAll());
            }}
          >
            Unselect all
          </ButtonComponent>
          <a href={createFile(checkedItems)} download={`${checkedItems.length}_persons.csv`} className={`button-${theme}`}>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
export default FlyoutComponent;
