import { Field } from 'formik';

import { CheckIcon } from './icons';

import {
  InputBlock,
  InputRow,
  RadioButton,
} from '../styles';

const SalaryGroup = () => (
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
        <label key={option.name}>
          {option.label}
          <Field type="number" name={option.name}/>
        </label>
      ))}
    </InputRow>
  </InputBlock>
);

export default SalaryGroup;
