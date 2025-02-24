import { useState, useEffect } from 'react';
import { ApplicationData } from '../models';
import { fetchData } from '../utils/fetchData';

import Page from './Page';
import Application from './Application';

import { SectionContainer, Container, Title, ApplicationsList } from '../styles';

const ApplicationsPage = () => {
  const [applications, setApplications] = useState<ApplicationData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setApplications(data);
    };
    loadData();
  }, []);

  const aplicationsList = <ApplicationsList>
    { applications.map((application) => <Application key={application.id} data={ application }  />)}
  </ApplicationsList>;

  return (
    <Page title="Все заявки">
      <SectionContainer>
        <Container>
          <Title>Заявки на размещение вакансий</Title>
          { aplicationsList }
        </Container>
      </SectionContainer>
    </Page>
  );
};


export default ApplicationsPage;
