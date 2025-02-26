import * as Yup from 'yup';

export const validationSchema = Yup.object({
  jobTitle: Yup.string(),
  vacancyName: Yup.string().required('Укажите наименование'),
  department: Yup.string().required('Укажите отдел'),
  openingDate: Yup.date().required('Выберите дату открытия'),
  plannedClosingDate: Yup.date().required('Выберите дату закрытия')
    .test(
      'is-later-than-opening',
      'Дата закрытия должна быть позже даты открытия',
      function (value) {
        const { openingDate } = this.parent;
        return openingDate ? value >= openingDate : true;
    }
  ),
  gender: Yup.string().required('Выберите пол'),
  education: Yup.string().required('Укажите образование'),
  salary: Yup.object({
    type: Yup.string(),
    from: Yup.number().positive('Зарплата должна быть больше 0'),
    to: Yup.number().positive('Зарплата должна быть больше 0')
      .test('is-less-than-from', 'Максимальная зарплата должна быть больше минимальной', function (value) {
        const { from } = this.parent;
        return !!value > from;
      }),
  }),
  region: Yup.string().required('Укажите регион'),
  address: Yup.string().required('Введите полный адрес. Например, Походный проезд, 3с1'),
  workExperience: Yup.string().required('Укажите опыт работы'),
  workSchedule: Yup.string().required('Укажите график работы'),
  employmentType: Yup.string().required('Выберите тип занятости'),
});
