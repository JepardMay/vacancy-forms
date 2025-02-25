import { ApplicationData } from '../models';

import Page from './Page';
import VacancyForm from './VacancyForm';

import { SectionContainer, Container, Title } from '../styles';

interface Props {
  title: string;
  header: React.ReactNode | string;
}

const FormPage = ({ title, header = title }: Props) => {
  const initialValues: ApplicationData = {
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
  };

  const handleSubmit = (values: ApplicationData) => {
    console.log('Создание вакансии:', values);
  };

  return (
    <Page title={ title }>
      <SectionContainer>
        <Container>
          <Title>{ header }</Title>
          <VacancyForm initialValues={ initialValues } onSubmit={handleSubmit} />
        </Container>
      </SectionContainer>
    </Page>
  );
};

export default FormPage;
