import styled from 'styled-components';
import { Container } from '../../components/common';
import { pageTransitions } from '../../styles/animations';

export const Wrapper = styled(Container)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${pageTransitions} 500ms linear;
`;

export const PageContent = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Welcome = styled.h1`
  margin: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #9b4f8a;
  color: #2f2b55;
`;

export const HomeAvatar = styled(Container)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 1rem 0;
  background-image: url('https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg');
  background-size: contain;
`;

export const MyName = styled.h2`
  font-weight: bold;
  color: #353252;
`;

export const MyDescriptionJob = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  color: #5e5c7f;
`;

export const AboutMeTitle = styled.h2`
  margin-bottom: 1rem;
  color: #353252;
`;

export const MySumary = styled.p`
  text-align: center;
  width: 50rem;
  color: #5e5c7f;
`;

export const HomeToolsAndLAnguagesRow = styled.div`
  display: flex;
  margin-bottom: 3rem;
  gap: 0.8rem;
`;
