import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.spacing.medium};
  }  

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.small};
  }  
`;
