import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jobs } from '../../constants';
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

export const ExperiencesPage = () => {
  return (
    <Wrapper>
      {jobs.map((job, jobIndex) => (
        <>
          {jobIndex === 0 && <PageTitle children={'Experiências'} />}
          <JobTitle children={job.title}></JobTitle>
          <ResumeJob>
            <Summary children={job.resume}></Summary>
            <ResponsabilitiesContainer>
              {job.job_responsabilities.map(({ title, summary, icon }, index) => (
                <JobResposabilityContainer key={index}>
                  <FontAwesomeIcon
                    icon={icon}
                    style={{ color: '#5e5c7f' }} // aqui vai mudar de acordo com o theme(ligth:dark)
                    size='3x'
                  />
                  <ResponsabilityTitle children={title} />
                  <Summary children={summary} />
                </JobResposabilityContainer>
              ))}
            </ResponsabilitiesContainer>
          </ResumeJob>
        </>
      ))}
    </Wrapper>
  );
};
