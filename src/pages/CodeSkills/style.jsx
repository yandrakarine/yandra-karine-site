import styled from 'styled-components';
import { Container } from '../../components/common';
import { pageTransitions } from '../../styles/animations';
import { device } from '../../styles/devices';

export const Wrapper = styled(Container)`
  padding: 2rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  animation: ${pageTransitions} 500ms linear;

  @media (${device.mobileL}) {
    overflow-x: hidden;
    overflow-y: scroll;
  }
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
  flex: 1;
  padding: 2rem;
  cursor: grab;
  overflow: hidden;

  @media (${device.mobileL}) {
    height: 70%;
  }
`;

export const ProjectsCardsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  border-radius: 0.5rem;

  @media (${device.mobileL}) {
    padding: 1rem;
    flex-direction: column;
  }

  @media (${device.laptopM}) {
    height: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

export const ProjectCard = styled(Container)`
  box-shadow: 2px 5px 10px 2px rgb(69 67 96 / 10%);
  background-color: #fff;
  border-radius: 0.5rem;
  min-height: 200px;
  min-width: 400px;
  padding: 14px;
  flex-direction: column;
  align-items: center;

  @media (${device.mobileL}) {
    width: 95%;
    margin: 1rem 0;
    &:hover {
    }
  }

  @media (${device.laptopM}) {
    border-radius: 0.3rem;
    width: 20%;
    height: 30rem;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
    transition: 500ms;
    &:hover {
      transform: scale(1.05);
      transition: 500ms;
    }
  }
`;

export const ProjectAvatar = styled(Container)`
  justify-content: center;
  width: 70%;
  min-height: 10rem;
  background-image: url(${({ projectImage }) => projectImage});
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;

  @media (${device.laptopM}) {
    width: 60%;
    height: auto;
  }
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 2rem;
  color: #353252;

  @media (${device.mobileL}) {
    margin-bottom: 1rem;
  }
  @media (${device.laptopM}) {
    margin-bottom: 1rem;
  }
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
