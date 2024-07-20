import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import { getItem } from '../api';

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  return await getItem(+(params.itemId || 1));
};
