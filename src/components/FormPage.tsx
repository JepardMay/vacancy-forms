import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ApplicationData } from '../models';
import { getInitialValues } from '../utils/getInitialValues';

import Page from './Page';
import VacancyForm from './VacancyForm';

import { SectionContainer, Container, Title } from '../styles';

interface Props {
  title: string;
  header: React.ReactNode | string;
  applications: ApplicationData[];
  setApplications: React.Dispatch<React.SetStateAction<ApplicationData[]>>;
}

const FormPage = ({ title, header = title, applications, setApplications }: Props) => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState<ApplicationData>(getInitialValues());
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (id) {
      const vacancy = applications.find((item) => item.id === parseInt(id));
      if (vacancy) {
        setInitialValues(vacancy);
      } else {
        console.error('Вакансия не найдена');
        navigate('/');
      }
    } else {
      setInitialValues(getInitialValues());
    }
  }, [id, applications, navigate]);

  useEffect(() => {
    if (isSubmitted) {
      navigate('/');
    }
  }, [isSubmitted, navigate]);

  const handleReset = (id: number | undefined) => {
    setInitialValues(getInitialValues(id));
  };

  const handleSubmit = (values: ApplicationData) => {
    if (values.id) {
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application.id === values.id ? { ...application, ...values } : application
        )
      );
    } else {
      const newApplication = {
        ...values,
        id: Math.max(...applications.map(app => app.id ?? 0)) + 1,
      };
      setApplications((prevApplications) => [...prevApplications, newApplication]);
    }

    setIsSubmitted(true);
  };

  return (
    <Page title={ title }>
      <SectionContainer>
        <Container>
          <Title>{ header }</Title>
          <VacancyForm
            initialValues={ initialValues }
            onSubmit={ handleSubmit }
            onReset={ handleReset }
          />
        </Container>
      </SectionContainer>
    </Page>
  );
};

export default FormPage;
