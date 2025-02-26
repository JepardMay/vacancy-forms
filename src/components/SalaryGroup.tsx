import { Field, FormikErrors, FormikTouched, ErrorMessage } from 'formik';
import { ApplicationData } from '../models';

import { CheckIcon } from './icons';

import {
  InputBlock,
  InputRow,
  RadioButton,
  InputGroup,
} from '../styles';

interface Props {
  errors: FormikErrors<ApplicationData>;
  touched: FormikTouched<ApplicationData>;
}

const SalaryGroup = ({ errors, touched }: Props) => (
  <InputBlock>
    <label>Зарплата</label>
    <InputRow>
      {[
        { id: "hand-on", value: "На руки" },
        { id: "before-taxes", value: "До вычета налогов" }
      ].map(option => (
        <RadioButton $horizontal key={option.id}>
          <Field type="radio" name="salary.type" id={option.id} value={option.value} />
          <label htmlFor={option.id}>
            <CheckIcon />
            {option.value}
          </label>
        </RadioButton>
      ))}
    </InputRow>
    <InputRow>
        {[
        { label: "от", name: "salary.from" },
        { label: "до", name: "salary.to" },
      ].map(option => (
        <InputGroup key={option.name}>
          <label key={option.name}>
            {option.label}
            <Field type="number" name={option.name} className={errors[option.name as keyof ApplicationData] && touched[option.name as keyof ApplicationData] ? 'error' : ''} />
          </label>
          <ErrorMessage name={ option.name } className="error-message" component="div" />
        </InputGroup>
      ))}
    </InputRow>
  </InputBlock>
);

export default SalaryGroup;
