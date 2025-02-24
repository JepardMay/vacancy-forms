import { Link } from 'react-router-dom';
import { ApplicationData } from '../models';
import { formatDate } from '../utils/formatUtils';

import { EditIcon, MapPinIcon, MetroIcon } from './icons';

import { ApplicationsItem, ApplicationsHeader, ApplicationsTitle, ApplicationsBody, ApplicationsAddress, ApplicationsInfo, ApplicationsSalary, ApplicationsWorkExp, ApplicationsMetro } from '../styles';

interface Props {
  data: ApplicationData;
}

const Application = ({ data }: Props) => {
  const { id, vacancyName, openingDate, region, address, salary, workExperience, metroStation } = data;

  const salaryFrom = salary?.from ? <b>от { salary.from.toLocaleString('ru-RU') }</b> : '';
  const salaryTo = salary?.to ? <b>до { salary.to.toLocaleString('ru-RU') }</b> : '';
  const salaryType = salary?.type ? <span>{ salary.type }</span> : '';

  return (
    <ApplicationsItem>
      <ApplicationsHeader>
        <p>Дата публикации: { formatDate(openingDate) }</p>
        <Link to={ `/edit/${id}` }>
          <EditIcon/>
        </Link>
      </ApplicationsHeader>
      <ApplicationsTitle>{ vacancyName }</ApplicationsTitle>
      <ApplicationsBody>
        <ApplicationsAddress>
          <MapPinIcon />
          { region }, { address }
        </ApplicationsAddress>
        <ApplicationsInfo>
          <ApplicationsSalary>{ salaryFrom } { salaryTo } { salaryType }</ApplicationsSalary>
          <ApplicationsWorkExp>Требуемый опыт: <b>{ workExperience }</b></ApplicationsWorkExp>
          <ApplicationsMetro>
            <MetroIcon />
            { metroStation }
          </ApplicationsMetro>
        </ApplicationsInfo>
      </ApplicationsBody>
    </ApplicationsItem>
  );
};


export default Application;
