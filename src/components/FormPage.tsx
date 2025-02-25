import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApplicationData } from '../models';
import { fetchData } from '../utils/fetchData';

import Page from './Page';
import VacancyForm from './VacancyForm';

import { SectionContainer, Container, Title } from '../styles';

interface Props {
  title: string;
  header: React.ReactNode | string;
}

const FormPage = ({ title, header = title }: Props) => {
  const { id } = useParams<{ id: string }>();

  const [initialValues, setInitialValues] = useState<ApplicationData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data: ApplicationData[] = await fetchData();
        const vacancy = data.find((item) => item.id === parseInt(id as string));
        if (vacancy) {
          setInitialValues(vacancy);
        } else {
          console.error('Вакансия не найдена');
        }
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadData();
    } else {
      setInitialValues({
        id: undefined,
        jobTitle: '',
        vacancyName: '',
        department: '',
        openingDate: '',
        plannedClosingDate: '',
        gender: '',
        education: '',
        salary: {
          type: '',
          from: undefined,
          to: undefined,
        },
        region: '',
        address: '',
        workExperience: '',
        workSchedule: '',
        employmentType: '',
        responsibilities: '',
        candidateRequirements: '',
        advantages: '',
        weOffer: '',
      });
    }
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!initialValues) {
    return <div>Данные не загружены</div>;
  }

  const setTitle = () => {
    if (loading) return 'Загрузка...';
    if (!initialValues) return 'Данные не загружены';
    else return header;
  };

  const handleSubmit = (values: ApplicationData) => {
    if (id) {
      console.log('Редактирование вакансии:', values);
    } else {
      console.log('Создание вакансии:', values);
    }
  };

  return (
    <Page title={ title }>
      <SectionContainer>
        <Container>
          <Title>{ setTitle() }</Title>
          { (!loading && initialValues) && <VacancyForm initialValues={ initialValues } onSubmit={ handleSubmit } /> }
        </Container>
      </SectionContainer>
    </Page>
  );
};

export default FormPage;
