import { useEffect, ReactNode } from 'react';

import Header from './Header';

import { Wrapper } from '../styles';

interface Props {
  title: string;
  children: ReactNode;
}

const Page = ({ title, children }: Props) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <Wrapper>
      <Header />
      <main>{ children }</main>
    </Wrapper>
  );
};

export default Page;
