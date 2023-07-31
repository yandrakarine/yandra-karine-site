import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  PageTitle,
  Wrapper,
  ResumeJob,
  JobTitle,
  Summary,
  ResponsabilitiesContainer,
  JobResposabilityContainer,
  ResponsabilityTitle,
} from './style';
import { i18n } from '../../translate/i18n';
import { i18nKeys } from '../../constants';
import { useTheme } from '../../context/theme';

const { jobs, experiencesPageTitle } = i18nKeys;

export const ExperiencesPage = () => {
  const { activeTheme } = useTheme();
  return (
    <Wrapper>
      {jobs.map((job, jobIndex) => (
        <>
          {jobIndex === 0 && <PageTitle children={i18n.t(experiencesPageTitle)} />}
          <JobTitle children={i18n.t(job.title)}></JobTitle>
          <ResumeJob>
            <Summary children={i18n.t(job.resume)}></Summary>
            <ResponsabilitiesContainer>
              {job.job_responsabilities.map(({ title, summary, icon }, index) => (
                <JobResposabilityContainer key={i18n.t(index)}>
                  <FontAwesomeIcon
                    icon={i18n.t(icon)}
                    style={{ color: activeTheme === 'light' ? '#5e5c7f' : '#e6edf3' }}
                    size='3x'
                  />
                  <ResponsabilityTitle children={i18n.t(title)} />
                  <Summary children={i18n.t(summary)} />
                </JobResposabilityContainer>
              ))}
            </ResponsabilitiesContainer>
          </ResumeJob>
        </>
      ))}
    </Wrapper>
  );
};
