import { useRef, useState } from 'react';
import styles from './Form.module.css';
import { ValidationError } from 'yup';
import { useDispatch } from 'react-redux';
import { addUncontrolled } from '../../store/uncontrolledSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import schema, { FormDataErrors } from '../../validation/schema';
import { transformYupErrorsIntoObject } from '../../validation/helper';
import CountriesDataList from '../CountriesDataList/CountriesDataList';
import { InputData } from '../../types/InputData';
import { inputData2Stored } from '../../types/helper';
import { addSubmitted } from '../../store/justSubmittedSlice';
import { Uncontrolled } from '../../constants/FormType';

const UncontrolledForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [formError, setFormError] = useState<FormDataErrors>({});

  const handleSubmit = async () => {
    try {
      if (formRef.current) {
        const formData = Object.fromEntries(new FormData(formRef.current).entries());

        const fileList = imageInputRef.current?.files || undefined;
        const inputData: InputData = { ...formData, acceptTerms: formData.acceptTerms === 'on', image: fileList };

        const data = await schema.validate(inputData, { abortEarly: false });
        dispatch(addUncontrolled(await inputData2Stored(data)));
        dispatch(addSubmitted(Uncontrolled));
        navigate('/');
      }
    } catch (error) {
      const validationError = error as ValidationError;
      setFormError(transformYupErrorsIntoObject(validationError));
    }
  };

  return (
    <div className={styles.uncontrolled}>
      <NavLink to={`/`}>&#8592;Home</NavLink>
      <div className={styles.header}>Uncontrolled Form</div>
      <form className={styles.form} ref={formRef}>
        <div className={styles.container}>
          <div>
            <div className={styles.textField}>
              <label htmlFor="name" className={styles.block}>
                Name
              </label>
              <input type="text" name="name" />
              <div className={styles.error}>{formError.name}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="email" className={styles.block}>
                E-mail
              </label>
              <input type="text" name="email" />
              <div className={styles.error}>{formError.email}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="country" className={styles.block}>
                Country
              </label>
              <input list="countries" name="country" id="country"></input>
              <CountriesDataList />
              <div className={styles.error}>{formError.country}</div>
            </div>

            <div className={styles.passwordField}>
              <label htmlFor="password" className={styles.block}>
                Password
              </label>
              <input type="password" name="password" />
              <div className={styles.error}>{formError.password}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="passwordConfirmation" className={styles.block}>
                Confirm the password
              </label>
              <input type="password" name="passwordConfirmation" />
              <div className={styles.error}>{formError.passwordConfirmation}</div>
            </div>
          </div>
          <div>
            <div className={styles.textField}>
              <label htmlFor="age" className={styles.block}>
                Age
              </label>
              <input type="text" name="age" />
              <div className={styles.error}>{formError.age}</div>
            </div>

            <div className={styles.genderField}>
              <label htmlFor="gender">Gender</label>
              <label htmlFor="male" className={styles.gender}>
                <input name="gender" type="radio" id="male" value="male" />
                Male
              </label>
              <label htmlFor="female" className={styles.gender}>
                <input name="gender" type="radio" id="female" value="female" />
                Female
              </label>
              <label htmlFor="other" className={styles.gender}>
                <input name="gender" type="radio" id="other" value="other" />
                Other
              </label>
              <div className={styles.error}>{formError.gender}</div>
            </div>

            <div className={styles.textField}>
              <label htmlFor="image" className={styles.block}>
                Image
              </label>
              <input type="file" name="image" accept="image/png, image/jpeg" ref={imageInputRef}></input>
              <div className={styles.error}>{formError.image}</div>
            </div>
          </div>
        </div>

        <div className={styles.acceptField}>
          <input id="acceptTerms" name="acceptTerms" type="checkbox" />
          <label htmlFor="acceptTerms">I accept Terms and Conditions agreement</label>
          <div className={styles.error}>{formError.acceptTerms}</div>
        </div>

        <div className={styles.button}>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UncontrolledForm;
