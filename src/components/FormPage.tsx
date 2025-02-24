import Page from './Page';

import { SectionContainer, Container, Title } from '../styles';

interface Props {
  title: string;
  header: React.ReactNode | string;
}

const FormPage = ({ title, header = title }: Props) => {

  return (
    <Page title={ title }>
      <SectionContainer>
        <Container>
          <Title>{ header }</Title>
        </Container>
      </SectionContainer>
    </Page>
  );
};

export default FormPage;
