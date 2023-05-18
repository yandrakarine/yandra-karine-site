import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  LinkRow,
  PageTitle,
  ProjectAvatar,
  ProjectCard,
  ProjectSummary,
  ProjectTitle,
  ProjectsCardsRow,
  ProjectsCarousel,
  Wrapper,
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectsList } from '../../constants';

export const CodeSkillsPage = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const noMobile = window.innerWidth > 438;
  const isDesktop = window.innerWidth > 1440;

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Wrapper>
      <PageTitle children={'Projetos'} />
      {isDesktop ? (
        <ProjectsCarousel ref={carousel} as={motion.div} whileTap={{ cursor: 'grabbing' }}>
          <ProjectsCardsRow
            as={motion.div}
            drag={'x'}
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {projectsList.map(({ projectImage, projectTitle, projectSummary, repoLink }) => (
              <ProjectCard key={Math.random()}>
                <ProjectTitle children={projectTitle} />
                <ProjectAvatar projectImage={projectImage} />
                <ProjectSummary children={projectSummary} />
                <LinkRow href={repoLink}>
                  <FontAwesomeIcon
                    icon='fa-brands fa-github'
                    style={{ color: '#5e5c7f' }}
                    size='2x'
                    cursor='pointer'
                    title='Ver no repositório'
                  />
                </LinkRow>
              </ProjectCard>
            ))}
          </ProjectsCardsRow>
        </ProjectsCarousel>
      ) : (
        <ProjectsCardsRow>
          {projectsList.map(({ projectImage, projectTitle, projectSummary, repoLink }) => (
            <ProjectCard key={Math.random()}>
              <ProjectTitle children={projectTitle} />
              <ProjectAvatar projectImage={projectImage} />
              <ProjectSummary children={projectSummary} />
              <LinkRow href={repoLink}>
                <FontAwesomeIcon
                  icon='fa-brands fa-github'
                  style={{ color: '#5e5c7f' }}
                  size='2x'
                  cursor='pointer'
                  title='Ver no repositório'
                />
              </LinkRow>
            </ProjectCard>
          ))}
        </ProjectsCardsRow>
      )}
    </Wrapper>
  );
};
