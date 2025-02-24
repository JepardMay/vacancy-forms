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
    element: <FormPage
      title="Создание заявки"
      header={
          <>
            Форма размещения <span>заявки</span>
          </>
        }
    />,
  },
  {
    path: '/edit:id',
    element: <FormPage
      title="Редактирование заявки"
      header={
          <>
            Форма редактирования <span>заявки</span>
          </>
        }
    />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
