import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 56px;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: ${({ theme }) => theme.colors.primary};

  span {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 26px;
    font-weight: 400;
    font-size: 26px;
    line-height: 33px;
  } 
`;
