import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { ApplicationData } from '../models';

import { CheckIcon } from './icons';
import FormField from './FormField';

import {
  FormBlock,
  FormRow,
  InputBlock,
  InputRow,
  RadioButton,
  FormFooter,
  Button, 
  ButtonBorder,
} from '../styles';

interface Props {
  initialValues: ApplicationData;
  onSubmit: (values: ApplicationData) => void;
}

const validationSchema = Yup.object({
  jobTitle: Yup.string(),
  vacancyName: Yup.string().required('Укажите наименование'),
  department: Yup.string().required('Укажите отдел'),
  openingDate: Yup.date().required('Выберите дату открытия'),
  plannedClosingDate: Yup.date().required('Выберите дату закрытия'),
  gender: Yup.string().required('Выберите пол'),
  education: Yup.string()
    .required('Укажите образование')
    .notOneOf([''], 'Выберите значение из списка'),
  salary: Yup.object({
    type: Yup.string(),
    from: Yup.number(),
    to: Yup.number(),
  }),
  region: Yup.string().required('Укажите регион'),
  address: Yup.string().required('Введите полный адрес. Например, Походный проезд, 3с1'),
  workExperience: Yup.string().required('Укажите опыт работы'),
  workSchedule: Yup.string().required('Укажите график работы'),
  employmentType: Yup.string().required('Выберите тип занятости'),
});

const VacancyForm = ({ initialValues, onSubmit }: Props) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
              <InputBlock $required $width={120}>
                <label>Пол</label>
                <RadioButton>
                  <Field type="radio" name="gender" id="male" value="Мужской" />
                  <label htmlFor="male">
                    <CheckIcon/>
                    Мужской
                  </label>
                </RadioButton>
                <RadioButton>
                  <Field type="radio" name="gender" id="female" value="Женский" />
                  <label htmlFor="female">
                    <CheckIcon/>
                    Женский
                  </label>
                </RadioButton>
                <ErrorMessage name="gender" className="error-message" component="div" />
              </InputBlock>
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
              <InputBlock>
                <label>Зарплата</label>
                <InputRow>
                  <RadioButton $horizontal>
                    <Field type="radio" name="salary.type" id="hand-on" value="Полная занятость" />
                    <label htmlFor="hand-on">
                      <CheckIcon/>
                      На руки
                    </label>
                  </RadioButton>
                  <RadioButton $horizontal>
                    <Field type="radio" name="salary.type" id="before-taxes" value="Частичная занятость" />
                    <label htmlFor="before-taxes">
                      <CheckIcon/>
                      До вычета налогов
                    </label>
                  </RadioButton>
                </InputRow>
                <InputRow>
                  <label>
                    от
                    <Field type="number" name="salary.from"/>
                  </label>
                  <label>
                    до
                    <Field type="number" name="salary.from"/>
                  </label>
                </InputRow>
              </InputBlock>
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
              <InputBlock $required $width={200}>
                <label>Тип занятости</label>
                <RadioButton>
                  <Field type="radio" name="employmentType" id="full-time" value="Полная занятость" />
                  <label htmlFor="full-time">
                    <CheckIcon/>
                    Полная занятость
                  </label>
                </RadioButton>
                <RadioButton>
                  <Field type="radio" name="employmentType" id="part-time" value="Частичная занятость" />
                  <label htmlFor="part-time">
                    <CheckIcon/>
                    Частичная занятость
                  </label>
                </RadioButton>
                <RadioButton>
                  <Field type="radio" name="employmentType" id="internship" value="Стажировка" />
                  <label htmlFor="internship">
                    <CheckIcon/>
                    Стажировка
                  </label>
                </RadioButton>
                <ErrorMessage name="employmentType" className="error-message" component="div" />
              </InputBlock>
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
            <ButtonBorder type="reset">Сбросить</ButtonBorder>
          </FormFooter>
        </Form>
      )}
    </Formik>
  );
};

export default VacancyForm;
