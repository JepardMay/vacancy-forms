import { ApplicationData } from "../models";

export const getInitialValues = (id?: number): ApplicationData => ({
  id: id ?? undefined,
  jobTitle: '',
  vacancyName: '',
  department: '',
  openingDate: '',
  plannedClosingDate: '',
  gender: '',
  education: '',
  salary: {
    type: '',
    from: '',
    to: ''
  },
  region: '',
  address: '',
  workExperience: '',
  workSchedule: '',
  employmentType: '',
  responsibilities: '',
  candidateRequirements: '',
  advantages: '',
  weOffer: '',
});
  