import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-weight: 800;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.bgSecondary};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 26px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover,
  &:focus,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.hover};
    outline: none;
  }
`;

export const ButtonBorder = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.hover};
    background-color: transparent;
  }
`;
