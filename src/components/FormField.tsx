import { Field, FormikErrors, FormikTouched, ErrorMessage } from 'formik';
import { ApplicationData } from '../models';

import {
  InputBlock,
} from '../styles';

interface Props {
  name: string;
  label: string;
  type?: string;
  as?: string;
  required?: boolean;
  width?: number;
  options?: { value: string; label: string }[];
  errors: FormikErrors<ApplicationData>;
  touched: FormikTouched<ApplicationData>;
}

const FormField = ({
  name,
  label,
  type = 'text',
  as,
  required = false,
  width,
  options,
  errors,
  touched,
}: Props) => {
  return (
    <InputBlock $required={required} $width={width}>
      <label htmlFor={name}>{label}</label>
      {as === 'select' ? (
        <Field
          as="select"
          id={name}
          name={name}
          className={errors[name as keyof ApplicationData] && touched[name as keyof ApplicationData] ? 'error' : ''}
        >
          <option value="" disabled>
            Выберите
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          id={name}
          name={name}
          type={type}
          as={as}
          className={errors[name as keyof ApplicationData] && touched[name as keyof ApplicationData] ? 'error' : ''}
        />
      )}
      { required &&
        <ErrorMessage name={ name } className="error-message" component="div" />
      }
    </InputBlock>
  );
};


export default FormField;
