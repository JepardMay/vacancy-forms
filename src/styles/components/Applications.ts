import styled from 'styled-components';

export const ApplicationsList = styled.ul`
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ApplicationsItem = styled.li`
  padding: 16px 28px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 16px;
`;

export const ApplicationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;

  p {
    margin: 0;
    margin-right: 15px;
    font-size: 14px;
    line-height: 17px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.default};
  }

  @media (hover: hover) {
    a:hover,
    a:focus-visible {
      color: ${({ theme }) => theme.colors.hover};
      outline: none;
    }
  }
`;

export const ApplicationsTitle = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
`;

export const ApplicationsBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
`;

export const ApplicationsAddress = styled.p`
  display: flex;
  align-items: baseline;
  margin: 0;
  line-height: 19px;

  svg {
    flex-shrink: 0;
    align-self: center;
    margin-top: -2px;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ApplicationsInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 20px;
  line-height: 1;
`;

export const ApplicationsSalary = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 17px;

  b {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ApplicationsWorkExp = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 17px;

  b {
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ApplicationsMetro = styled.p`
  display: flex;
  align-items: baseline;
  margin: 0;
  font-size: 16px;
  line-height: 19px;

  svg {
    flex-shrink: 0;
    align-self: center;
    margin-right: 5px;
  }
`;
