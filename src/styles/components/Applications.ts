import styled, { css } from 'styled-components';

const flexBaseline = css`
  display: flex;
  align-items: baseline;
`;

const boldText = css`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const iconStyles = css`
  flex-shrink: 0;
  align-self: center;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BaseText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 17px;
`;

const FlexContainer = styled.div`
  ${flexBaseline}
  gap: 20px;
`;

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

export const ApplicationsHeader = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;

  p {
    margin: 0;
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

export const ApplicationsBody = styled(FlexContainer)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ApplicationsAddress = styled.p`
  ${flexBaseline}
  margin: 0;
  line-height: 19px;

  svg {
    ${iconStyles}
    margin-top: -2px;
  }
`;

export const ApplicationsInfo = styled(FlexContainer)`
  flex-wrap: wrap;
  line-height: 1;
`;

export const ApplicationsSalary = styled(BaseText)`
  b {
    ${boldText}
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ApplicationsWorkExp = styled(BaseText)`
  b {
    ${boldText}
    font-size: 16px;
    line-height: 16px;
  }
`;

export const ApplicationsMetro = styled.p`
  ${flexBaseline}
  margin: 0;
  font-size: 16px;
  line-height: 19px;

  svg {
    ${iconStyles}
  }
`;
