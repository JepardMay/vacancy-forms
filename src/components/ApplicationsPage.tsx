import { ApplicationData } from '../models';

import Page from './Page';
import Application from './Application';

import { SectionContainer, Container, Title, ApplicationsList } from '../styles';

interface Props {
  applications: ApplicationData[];
}

const ApplicationsPage = ({ applications }: Props) => {
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
