export interface ApplicationData {
  id?: number;
  jobTitle: string;
  vacancyName: string;
  department: string;
  openingDate: string;
  plannedClosingDate: string;
  gender: 'Мужской' | 'Женский' | '';
  education: 'Высшее' | 'Среднее' | '';
  salary?: {
    type?: 'На руки' | 'До вычета налогов' | '';
    from?: string;
    to?: string;
  };
  region: string;
  address: string;
  metroStation?: string;
  workExperience: string;
  workSchedule: 'Полный день' | 'Сменный 5/2' | 'Сменный 2/2' | '';
  employmentType: 'Полная занятость' | 'Частичная занятость' | 'Стажировка' | '';
  responsibilities?: string;
  candidateRequirements?: string;
  advantages?: string;
  weOffer?: string;
};
