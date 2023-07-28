import styled from 'styled-components';
import { Container } from '../../components/common';
import { pageTransitions } from '../../styles/animations';
import { device } from '../../styles/devices';

export const Wrapper = styled(Container)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${pageTransitions} 500ms linear;
  overflow: scroll;

  @media (${device.mobileL}) {
    height: 1fr;
  }
`;

export const PageContent = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const Welcome = styled.h1`
  margin: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.titleTerciary};
  color: ${({ theme }) => theme.titleSecondary};

  @media (${device.laptopM}) {
    margin: 1rem;
  }
`;

export const HomeAvatar = styled(Container)`
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 50%;
  margin: 1rem 0;
  background-image: url(${({ avatarImage }) => avatarImage});
  background-size: contain;
  background-repeat: no-repeat;

  @media (${device.mobileL}) {
    min-width: 7rem;
    min-height: 7rem;
  }

  @media (${device.laptopM}) {
    margin: 0.5rem;
  }
`;

export const MyName = styled.h2`
  font-weight: bold;
  color: ${({ theme }) => theme.titlePrimary}; // #353252
`;

export const MyDescriptionJob = styled.h3`
  text-align: center;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.textPrimary}; //#5e5c7f;
`;

export const AboutMeTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.titlePrimary}; // #353252;

  @media (${device.mobileL}) {
    width: 70%;
  }

  @media (${device.laptopM}) {
    margin: 0.5rem;
  }
`;

export const MySumary = styled.p`
  text-align: center;
  width: 50rem;
  color: ${({ theme }) => theme.textPrimary}; //#5e5c7f;
  margin-bottom: 1.5rem;

  @media (${device.tablet}) {
    width: 70%;
  }

  @media (${device.mobileL}) {
    width: 100%;
  }

  @media (${device.laptopM}) {
    margin-bottom: 0.5rem;
  }
`;

export const HomeToolsAndLAnguagesRow = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  gap: 0.8rem;

  @media (${device.laptopM}) {
    margin: 1rem;
  }
`;

export const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.titlePrimary}; //#353252;
  margin: 1rem 0 1.5rem;
`;

export const ContactRow = styled(Container)`
  justify-content: space-around;
  width: 50%;
`;

export const LinkContainer = styled.a.attrs(() => ({
  target: '_blank',
}))``;

export const ContactLabel = styled.h5`
  color: ${({ theme }) => theme.textPrimary}; //#5e5c7f;
`;

export const ContactContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 0;
  height: 5rem;
  width: 100%;
`;
