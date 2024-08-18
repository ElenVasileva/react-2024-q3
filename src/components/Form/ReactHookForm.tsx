import styles from './Form.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addReactHook } from '../../store/reactHookSlice';
import schema from '../../validation/schema';
import { NavLink } from 'react-router-dom';
import CountriesDataList from '../CountriesDataList/CountriesDataList';
import { InputData } from '../../types/InputData';
import { inputData2Stored } from '../../types/helper';
import { addSubmitted } from '../../store/justSubmittedSlice';
import { ReactHook } from '../../constants/FormType';

const ReactHookForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    dispatch(addReactHook(await inputData2Stored(data)));
    dispatch(addSubmitted(ReactHook));
    navigate('/');
  };
  return (
    <div className={styles.reacthook}>
      <NavLink to={`/`}>&#8592;Home</NavLink>
      <div className={styles.header}>React Hook Form</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.container}>
          <div>
            <div className={styles.textField}>
              <label htmlFor="name" className={styles.block}>
                Name
              </label>
              <input {...register('name')} />
              <div className={styles.error}>{errors.name?.message}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="email" className={styles.block}>
                E-mail
              </label>
              <input {...register('email')} />
              <div className={styles.error}>{errors.email?.message}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="country" className={styles.block}>
                Country
              </label>
              <input list="countries" {...register('country')} />
              <CountriesDataList />
              <div className={styles.error}>{errors.country?.message}</div>
            </div>

            <div className={styles.passwordField}>
              <label htmlFor="password" className={styles.block}>
                Password
              </label>
              <input type="password" {...register('password')} />
              <div className={styles.error}>{errors.password?.message}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="passwordConfirmation" className={styles.block}>
                Confirm the password
              </label>
              <input type="password" {...register('passwordConfirmation')} />
              <div className={styles.error}>{errors.passwordConfirmation?.message}</div>
            </div>
          </div>
          <div>
            <div className={styles.textField}>
              <label htmlFor="age" className={styles.block}>
                Age
              </label>
              <input {...register('age')} />
              <div className={styles.error}>{errors.age?.message}</div>
            </div>

            <div className={styles.genderField}>
              <label htmlFor="gender">Gender</label>
              <label htmlFor="male" className={styles.gender}>
                <input {...register('gender')} type="radio" value="male" id="male" />
                Male
              </label>
              <label htmlFor="female" className={styles.gender}>
                <input {...register('gender')} type="radio" value="female" id="female" />
                Female
              </label>
              <label htmlFor="other" className={styles.gender}>
                <input {...register('gender')} type="radio" value="other" id="other" />
                Other
              </label>
              <div className={styles.error}>{errors.gender?.message}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="image" className={styles.block}>
                Image
              </label>
              <input type="file" accept="image/png, image/jpeg" {...register('image')} />
              <div className={styles.error}>{errors.image?.message}</div>
            </div>
          </div>
        </div>

        <div className={styles.acceptField}>
          <input id="acceptTerms" {...register('acceptTerms')} type="checkbox" />
          <label htmlFor="acceptTerms">I accept Terms and Conditions agreement</label>
          <div className={styles.error}>{errors.acceptTerms?.message}</div>
        </div>

        <div className={styles.button}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;
