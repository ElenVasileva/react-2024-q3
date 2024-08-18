import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import HomePage from './HomePage';
import ReactHookFormPage from './ReactHookFormPage';
import UncontrolledFormPage from './UncontrolledFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/uncontrolled',
    element: <UncontrolledFormPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/reacthook',
    element: <ReactHookFormPage />,
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
