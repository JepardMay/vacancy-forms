import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ApplicationsPage from './components/ApplicationsPage';
import FormPage from './components/FormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ApplicationsPage />,
  },
  {
    path: '/create',
    element: <FormPage title="Форма размещения заявки" />,
  },
  {
    path: '/edit:id',
    element: <FormPage title="Форма редактирования заявки" />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
