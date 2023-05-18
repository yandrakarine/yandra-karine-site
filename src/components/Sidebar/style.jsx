import styled from 'styled-components';
import { Container } from '../common';
import { device } from '../../styles/devices';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 9rem;
  background: #2f2b55;
  padding: 2rem 0;

  @media (${device.mobileL}) {
    flex-direction: row;
    position: sticky;
    top: 0;
    height: 2.5rem;
    width: 100%;
    padding: 2rem;
    justify-content: center;
  }
`;

export const Profile = styled(Container)`
  display: flex;
  height: 10rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const MyAvatar = styled(Container)`
  border-radius: 50%;
  background-image: url(${({ avatarImage }) => avatarImage});
  width: 5rem;
  height: 5rem;
  background-size: contain;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const MyName = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const MyOccupation = styled(MyName)`
  font-size: 0.9rem;
  width: 7rem;
  font-weight: normal;
  text-align: center;
`;

export const BottomContainer = styled(Container)`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;
  width: 100%;

  @media (${device.mobileL}) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ContactRow = styled(Container)`
  justify-content: space-evenly;
  width: 100%;
`;
