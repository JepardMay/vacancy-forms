import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  color: ${({ theme }) => theme.colors.bgSecondary};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoWrapper = styled.div`
  a {
    display: block;
    width: 31px;
    height: 31px;
    margin-right: 15px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 50%;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuElement = styled.li`
  font-size: 18px;
  line-height: 25px;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 23px 20px;
    font: inherit;
    text-align: center;
    text-decoration-color: transparent;
    text-underline-offset: 6px;
    text-decoration-thickness: 6px;
    color: inherit;
    background-color: transparent;
    transition: all ${({ theme }) => theme.transitions.default};
  }

  @media (hover: hover) {
    a:hover,
    a:focus-visible {
      text-decoration-color: ${({ theme }) => theme.colors.accent};
      outline: none;
    }
  }

  a.active {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 22px;

    a {
      padding: 10px;
      text-underline-offset: 4px;
    }
  } 
`;
