import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.css';

import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/store';
import Card from '../Card/Card';
import { removeSubmitted } from '../../store/justSubmittedSlice';
import { ReactHook, Uncontrolled } from '../../constants/FormType';
import { useEffect } from 'react';

const Home = () => {
  const uncontrolledForm = useSelector((state: RootState) => state.uncontrolledForm.value);
  const reactHookForm = useSelector((state: RootState) => state.reactHookForm.value);
  const submitted = useSelector((state: RootState) => state.justSubmitted.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (submitted)
      setTimeout(() => {
        dispatch(removeSubmitted());
      }, 3000);
  }, [submitted, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.containerChild}>
        <NavLink to={`/uncontrolled`}>Uncontrolled Form</NavLink>
        <div className={styles.cardContainer}>
          {uncontrolledForm.map((data) => (
            <Card formData={data} key={uncontrolledForm.indexOf(data)} status={submitted === Uncontrolled && uncontrolledForm.indexOf(data) === 0 ? 'active' : ''} />
          ))}
        </div>
      </div>
      <div className={styles.containerChild}>
        <NavLink to={`/reacthook`}>React Hook Form</NavLink>
        <div className={styles.cardContainer}>
          {reactHookForm.map((data) => (
            <Card formData={data} key={reactHookForm.indexOf(data)} status={submitted === ReactHook && reactHookForm.indexOf(data) === 0 ? 'active' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
