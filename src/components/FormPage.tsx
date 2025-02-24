import Page from './Page';

interface Props {
  title: string;
}

const FormPage = ({ title }: Props) => {

  return (
    <Page title={ title }>
      <h1>{ title }</h1>
    </Page>
  );
};

export default FormPage;
