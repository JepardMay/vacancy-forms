import styled from 'styled-components';

export const FormBlock = styled.div`
  display: grid;
  gap: 40px;
  width: 100%;
  margin-bottom: 32px;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
    padding: 20px;
  } 
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
  width: 100%;
`;

interface InputBlockProps {
  $required?: boolean;
  $width?: number;
}


export const InputBlock = styled.div<InputBlockProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $width }) => $width ? `${$width}px` : '100%'};

  & > label {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    &::after {
      ${({ $required }) => $required && 'content: "*";'}
      color: ${({ theme }) => theme.colors.alert};
    }
  }

  input[type="text"],
  input[type="number"],
  input[type="date"],
  select,
  textarea {
    width: 100%;
    height: 43px;
    padding: 12px 20px;
    font-size: 16px;
    line-height: 19px;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    transition: ${({ theme }) => theme.transitions.default};

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }

    &.error {
      border-color: ${({ theme }) => theme.colors.alert};
    }

    &::-moz-clear {
      display: none;
    }

    &:focus,
    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary};
      outline: none;
    }

    @media (hover: hover) {
      &:hover:not(:focus) {
        box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.activeShadow};
      }
    }
  }

  textarea {
    height: 100px;
    resize: none;
  }

  select {
    padding: 5px 20px;
    padding-right: 40px;
    appearance: none;
    background-image: url('/img/arrow-icon.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 12px) center;
    background-size: 20px;
  }

  input[type="date"] {
    position: relative;
    padding-right: 10px;
    appearance: none;

    &::-webkit-calendar-picker-indicator {
      width: 22px;
      height: 22px;
      background-image: url('/img/calendar-icon.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100%;
    }
  }

  .error-message {
    margin-top: 4px;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.alert};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 100%;
  } 
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  label {
    display: flex;
    align-items: center;

    input {
      max-width: 100px;
      margin-left: 7px;
    }
  }
`;

export const InputGroup = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 120px;

  & + & {
    margin-left: 16px;
  }
`;

interface RadioButtonProps {
  $horizontal?: boolean;
}

export const RadioButton = styled.div<RadioButtonProps>`
  position: relative;
  margin-top: ${({ $horizontal }) => $horizontal ? '0' : '12px'};
  margin-left: ${({ $horizontal }) => $horizontal ? '20px' : '0'};

  &:first-child {
    margin-top: ${({ $horizontal }) => $horizontal ? '0' : '16px'};
    margin-left: 0;
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    visibility: hidden;
  } 

  input:checked + label { 
    &::before {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    svg {
      opacity: 1;
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 300;
    line-height: 19px;

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      margin-right: 8px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      transition: ${({ theme }) => theme.transitions.default};
    }

    svg {
      position: absolute;
      top: calc(50% - 10px);
      left: 0;
      width: 20px;
      height: 20px;
      opacity: 0;
      transition: ${({ theme }) => theme.transitions.default};
    }

    &:focus::before,
    &:focus-visible::before {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary};
    }
    
    @media (hover: hover) {
      &:hover:not(:focus)::before {
        box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.activeShadow};
      }
    }
  }
`;

export const FormFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  } 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  } 
`;
