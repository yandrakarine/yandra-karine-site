import styled from 'styled-components';
import { Container } from '../../components/common';
import { pageTransitions } from '../../styles/animations';

export const Wrapper = styled(Container)`
  padding: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* overflow: hidden; */
  overflow-y: scroll;
  animation: ${pageTransitions} 500ms linear;
`;

export const PageTitle = styled.h1`
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  color: #2f2b55;
  border-bottom: 2px solid #9b4f8a;
`;

export const ProjectsCarousel = styled.div`
  display: flex;
  border-radius: 0.5rem;
  max-width: 900px;
  max-height: 70%;
  box-shadow: 3px 5px 10px 3px rgb(69 67 96 / 10%);
  /* align-items: center; // isso aqui é teste */
  /* justify-content: space-around; */
  flex: 1; // todos do se ajustam para o mesmo tamanho
  padding: 2rem;
  cursor: grab;
  overflow: hidden;
`;

export const ProjectsCardsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  border-radius: 0.5rem;
  /* background-color: fuchsia; */
`;

export const ProjectCard = styled(Container)`
  box-shadow: 0px 5px 10px 0px rgb(69 67 96 / 10%);
  /* background-color: beige; */
  background-color: #fff;
  border-radius: 0.5rem;
  min-height: 200px;
  min-width: 400px;
  padding: 14px;
  /* width: 30%;
  height: 20rem;
  padding: 0.5rem; */
  flex-direction: column;
  align-items: center;
  /* transition: 500ms; */
  /* &:hover {
    transform: scale(1.05);
    transition: 500ms;
  } */
`;

export const ProjectAvatar = styled(Container)`
  justify-content: center;
  width: 100%;
  height: 40%;
  background-image: url(${({ projectImage }) => projectImage});
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-color: #353252; */
  /* border: solid 1px black; */
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 2rem;
  color: #353252;
`;

export const ProjectSummary = styled.p`
  margin: 0.3rem;
`;

export const LinkRow = styled.a.attrs(() => ({
  target: '_blank',
}))`
  margin-top: 0.8rem;
  padding: 0.5rem;
`;
