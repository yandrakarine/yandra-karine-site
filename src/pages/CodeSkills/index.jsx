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
import { i18n } from '../../translate/i18n';
import { i18nKeys, projectsListImages } from '../../constants';

export const CodeSkillsPage = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const isDesktop = window.innerWidth > 1440;

  const { projectsList, codeSkillsPageTitle } = i18nKeys;

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Wrapper>
      <PageTitle children={i18n.t(codeSkillsPageTitle)} />
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
            {projectsList.map(({ projectTitle, projectSummary, repoLink }, index) => (
              <ProjectCard key={index}>
                <ProjectTitle children={i18n.t(projectTitle)} />
                <ProjectAvatar projectImage={projectsListImages[index].projectImage} />
                <ProjectSummary children={i18n.t(projectSummary)} />
                <LinkRow href={i18n.t(repoLink)}>
                  <FontAwesomeIcon
                    icon='fa-brands fa-github'
                    style={{ color: '#5e5c7f' }}
                    size='2x'
                    cursor='pointer'
                    title='Visitar no repositório'
                  />
                </LinkRow>
              </ProjectCard>
            ))}
          </ProjectsCardsRow>
        </ProjectsCarousel>
      ) : (
        <ProjectsCardsRow>
          {projectsList.map(({ projectTitle, projectSummary, repoLink }, index) => (
            <ProjectCard key={index}>
              <ProjectTitle children={i18n.t(projectTitle)} />
              <ProjectAvatar projectImage={projectsListImages[index].projectImage} />
              <ProjectSummary children={i18n.t(projectSummary)} />
              <LinkRow href={i18n.t(repoLink)}>
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
