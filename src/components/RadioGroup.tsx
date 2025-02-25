import { Field, ErrorMessage } from 'formik';

import { CheckIcon } from './icons';

import {
  InputBlock,
  RadioButton,
} from '../styles';

interface Props {
  name: string;
  label: string;
  required?: boolean;
  width?: number;
  options: { value: string; label: string }[];
}

const RadioGroup = ({
  name,
  label,
  options,
  required = false,
  width,
}: Props) => (
  <InputBlock $required={required} $width={width}>
    <label>{label}</label>
    {options.map(({ value, label }) => (
      <RadioButton key={value}>
        <Field type="radio" name={name} id={value} value={label} />
        <label htmlFor={value}>
          <CheckIcon />
          {label}
        </label>
      </RadioButton>
    ))}
    { required &&
      <ErrorMessage name={name} className="error-message" component="div" />
    }
  </InputBlock>
);

export default RadioGroup;
