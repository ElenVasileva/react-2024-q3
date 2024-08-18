import { ValidationError } from 'yup';
import { FormDataErrors } from './schema';

/**
 * TransformYupErrorsIntoObject
 *
 * @description Transform the useless yup error into a useable validation object
 * @param {ValidationError} errors Yup validation errors
 * @returns {FormDataErrors} Validation errors
 */
const transformYupErrorsIntoObject = (errors: ValidationError): FormDataErrors => {
  const validationErrors: FormDataErrors = {};

  errors.inner.forEach((error: ValidationError) => {
    if (error.path !== undefined) {
      switch (error.path) {
        case 'name':
          validationErrors.name = error.errors[0];
          break;
        case 'age':
          validationErrors.age = error.errors[0];
          break;
        case 'email':
          validationErrors.email = error.errors[0];
          break;
        case 'password':
          validationErrors.password = error.errors[0];
          break;
        case 'passwordConfirmation':
          validationErrors.passwordConfirmation = error.errors[0];
          break;
        case 'gender':
          validationErrors.gender = error.errors[0];
          break;
        case 'country':
          validationErrors.country = error.errors[0];
          break;
        case 'image':
          validationErrors.image = error.errors[0];
          break;
        case 'acceptTerms':
          validationErrors.acceptTerms = error.errors[0];
          break;
      }
    }
  });
  return validationErrors;
};

export { transformYupErrorsIntoObject };
