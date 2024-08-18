import { object, string, number, ref, boolean, mixed, ObjectSchema } from 'yup';
import countries from '../constants/countries';
import { InputData } from '../types/InputData';

const schema: ObjectSchema<InputData> = object({
  name: string()
    .required('Name is required')
    .matches(/^[A-Z]/, { message: 'The first letter should be in uppercase' }),
  age: number().required('Age is required').positive('Age should be positive').integer('Age must be an integer').typeError('Age should be a number'),
  email: string().required('Email is required').email(),
  password: string()
    .required('Required')
    .min(8, 'Must be at least 8 characters')
    .test('required', 'Must contain at least 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character', (password: string) => {
      return /[0-9]/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[\W_]/.test(password);
    }),
  passwordConfirmation: string()
    .required('Required')
    .oneOf([ref('password')], 'Passwords must match'),
  gender: string().required('Gender is required'),
  country: string()
    .required('Country is required')
    .test({
      test: (value, ctx) => {
        if (value === '') return true;
        if (!countries.includes(value)) {
          return ctx.createError({ message: 'Must be a valid country' });
        }
        return true;
      },
    }),
  image: mixed<FileList>()
    .test('required', 'Please select a file', (files: FileList | undefined) => {
      return files && files?.length > 0;
    })
    .test('file size', 'File should be less than 1Mb', (files: FileList | undefined) => {
      return files && files?.length > 0 && files[0].size < 1024 * 1024;
    }),
  acceptTerms: boolean().required('You must accept the terms').oneOf([true], 'You must accept the terms'),
});

export default schema;

export interface FormDataErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  gender?: string;
  country?: string;
  image?: string;
  acceptTerms?: string;
}
