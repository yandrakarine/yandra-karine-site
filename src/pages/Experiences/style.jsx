import styled from 'styled-components';
import { Container } from '../../components/common';
import { pageTransitions } from '../../styles/animations';
import { device } from '../../styles/devices';

export const Wrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  animation: ${pageTransitions} 500ms linear;

  @media (${device.mobileL}) {
    padding: 1rem;
    overflow-y: scroll;
  }
`;

// Page Title - Experiences
export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  color: #2f2b55;
  border-bottom: 2px solid #9b4f8a;
`;

export const Summary = styled.p`
  text-align: center;
  padding: 2rem;
  color: #5e5c7f;

  @media (${device.mobileL}) {
    width: 80%;
  }
`;
/* ======================= Job Resume ======================================== */
export const ResumeJob = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 600px;

  @media (${device.mobileL}) {
    flex-direction: column;
    padding: 0.5rem 2rem;
  }
`;

export const JobTitle = styled.h2`
  text-align: center;
  max-width: 400px;
  color: #2f2b55;
`;

/* ======================= REsponsabilities Resume ======================================== */

export const ResponsabilitiesContainer = styled(Container)`
  flex: 1;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (${device.mobileL}) {
    flex-direction: column;
    width: 90%;
  }
`;

export const JobResposabilityContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  transform: translateY(0rem);
  transition: 500ms;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgb(69 67 96 / 10%);
  border-radius: 0.3rem;
  padding: 0.8rem 0rem;
  &:hover {
    transform: scale(1.05);
    transform: translateY(-1rem);
  }

  @media (${device.mobileL}) {
    padding: 2rem 0;
    transform: none;
    transition: 0;
    width: 70%;
  }
`;

export const ResponsabilityTitle = styled.h4`
  max-width: 300px;
  margin-top: 0.8rem;
  text-align: center;
  color: #9b4f8a;
`;
