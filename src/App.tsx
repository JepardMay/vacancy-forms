import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApplicationData } from './models';
import { fetchData } from './utils/fetchData';

import Loader from './components/Loader';
import ApplicationsPage from './components/ApplicationsPage';
import FormPage from './components/FormPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState<ApplicationData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        setApplications(data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
        element: <ApplicationsPage
          applications={applications}
        />,
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
        applications={applications}
        setApplications={setApplications}
      />,
    },
    {
      path: '/edit/:id',
      element: <FormPage
        title="Редактирование заявки"
        header={
            <>
              Форма редактирования <span>заявки</span>
            </>
          }
        applications={applications}
        setApplications={setApplications}
      />,
    },
  ]);

  if (loading) {
    return <Loader/>;
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App;
