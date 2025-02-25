import * as Yup from 'yup';

export const validationSchema = Yup.object({
  jobTitle: Yup.string(),
  vacancyName: Yup.string().required('Укажите наименование'),
  department: Yup.string().required('Укажите отдел'),
  openingDate: Yup.date().required('Выберите дату открытия'),
  plannedClosingDate: Yup.date().required('Выберите дату закрытия'),
  gender: Yup.string().required('Выберите пол'),
  education: Yup.string().required('Укажите образование'),
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
