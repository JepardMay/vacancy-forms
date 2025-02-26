import { Formik, Form } from 'formik';
import { validationSchema } from '../utils/validationSchema';
import { ApplicationData } from '../models';

import FormField from './FormField';
import RadioGroup from './RadioGroup';
import SalaryGroup from './SalaryGroup';

import {
  FormBlock,
  FormRow,
  FormFooter,
  Button, 
  ButtonBorder,
} from '../styles';

interface Props {
  initialValues: ApplicationData;
  onSubmit: (values: ApplicationData) => void;
  onReset: (id: number | undefined) => void;
}

const VacancyForm = ({ initialValues, onSubmit, onReset }: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={ onSubmit }
      enableReinitialize
    >
      { ({ errors, touched }) => (
        <Form>
          <FormBlock>
            <FormRow>
              <FormField
                name="jobTitle"
                label="Наименование должности"
                errors={errors}
                touched={touched}
                width={275}
              />
              <FormField
                name="vacancyName"
                label="Наименование вакансии"
                errors={errors}
                touched={touched}
                required
                width={275}
              />
              <FormField
                name="department"
                label="Отдел"
                errors={errors}
                touched={touched}
                required
                width={275}
              />
            </FormRow>
            <FormRow>
              <FormField
                name="openingDate"
                label="Дата открытия"
                type="date"
                errors={errors}
                touched={touched}
                required
                width={275}
              />
              <FormField
                name="plannedClosingDate"
                label="Плановая дата закрытия"
                type="date"
                errors={errors}
                touched={touched}
                required
                width={275}
              />
            </FormRow>
            <FormRow>
              <RadioGroup
                name="gender"
                label="Пол"
                required
                width={120}
                options={[
                  { value: 'male', label: 'Мужской' },
                  { value: 'female', label: 'Женский' },
                ]}
              />
              <FormField
                name="education"
                label="Образование"
                as="select"
                errors={errors}
                touched={touched}
                required
                width={275}
                options={[
                  { value: 'university', label: 'Высшее' },
                  { value: 'college', label: 'Среднее' },
                ]}
              />
            </FormRow>
          </FormBlock>

          <FormBlock>
            <FormRow>
              <SalaryGroup 
                errors={errors}
                touched={ touched }
              />
            </FormRow>
            <FormRow>
              <FormField
                name="region"
                label="Регион"
                errors={errors}
                touched={touched}
                required
                width={275}
              />
              <FormField
                name="address"
                label="Адрес"
                errors={errors}
                touched={touched}
                required
                width={420}
              />
              <FormField
                name="metroStation"
                label="Станция метро, МЦД"
                errors={errors}
                touched={touched}
                width={275}
              />
            </FormRow>
            <FormRow>
              <FormField
                name="workExperience"
                label="Опыт работы"
                errors={errors}
                touched={touched}
                required
                width={275}
              />
              <FormField
                name="workSchedule"
                label="График работы"
                as="select"
                errors={errors}
                touched={touched}
                required
                width={275}
                options={[
                  { value: 'full', label: 'Полный день' },
                  { value: '5-2', label: 'Сменный 5/2' },
                  { value: '2-2', label: 'Сменный 2/2' },
                ]}
              />
              <RadioGroup
                name="employmentType"
                label="Тип занятости"
                required
                width={200}
                options={[
                  { value: 'full-time', label: 'Полная занятость' },
                  { value: 'part-time', label: 'Частичная занятость' },
                  { value: 'internship', label: 'Стажировка' },
                ]}
              />
            </FormRow>
          </FormBlock>

          <FormBlock>
            <FormRow>
              <FormField
                name="responsibilities"
                label="Функциональные обязанности"
                as="textarea"
                errors={errors}
                touched={touched}
              />
            </FormRow>
            <FormRow>
              <FormField
                name="candidateRequirements"
                label="Пожелания к кандидату"
                as="textarea"
                errors={errors}
                touched={touched}
              />
            </FormRow>
            <FormRow>
              <FormField
                name="advantages"
                label="Преимуществом будет"
                as="textarea"
                errors={errors}
                touched={touched}
              />
            </FormRow>
            <FormRow>
              <FormField
                name="weOffer"
                label="Мы предлагаем"
                as="textarea"
                errors={errors}
                touched={touched}
              />
            </FormRow>
          </FormBlock>

          <FormFooter>
            <Button type="submit">{ initialValues.id ? 'Сохранить' : 'Отправить' }</Button>
            <ButtonBorder type="reset" onClick={() => onReset(initialValues.id)}>Сбросить</ButtonBorder>
          </FormFooter>
        </Form>
      )}
    </Formik>
  );
};

export default VacancyForm;
