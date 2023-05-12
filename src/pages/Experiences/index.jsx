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

export const ExperiencesPage = () => {
  const jobs = [
    {
      title: 'Desenvolvimento Frontend com React.js',
      resume:
        'Tive a oportunidade de atuar em um projeto em produção para uso próprio da empresa utilizando React.js. Minhas principais funções eram realizar melhorias no código e implementar novas funcionalidades utilizando principalmente React Hooks.',
      job_responsabilities: [
        {
          title: 'Melhorias no código',
          summary: 'blablbalba',
          icon: 'fa-solid fa-file-code',
        },
        {
          title: 'Novas funcionalidades',
          summary: 'lalala',
          icon: 'fa-solid fa-screwdriver-wrench',
        },
        // {
        //   title: '',
        //   summary: 'aaaaaa',
        //   icon: 'fa-solid fa-laptop-code',
        // },
      ],
    },
    {
      title: 'Analista Power Plataform I',
      resume:
        'Durante esse período trabalhei com ferramentas low-Code da Microsoft: Sharepoint, Power Automate e Power Apps; onde pude aplicar conceitos de lógica de programação assim como conceitos da linguagem javaScript com o objetivo de construir soluções e automações para os clientes deforma personalizada juntamente com o time de desenvolvimento da empresa.',
      job_responsabilities: [
        {
          title: 'Construir soluções e automações',
          summary: 'sjdhakshdkasjdh',
          icon: 'fa-solid fa-robot',
        },
        {
          title: 'Contato com Cliente',
          summary: 'weqweqweqwe',
          icon: 'fa-solid fa-people-group',
        },
      ],
    },
  ];

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
                    cursor='pointer'
                    title='Linkedin'
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
