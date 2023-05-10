import styled from 'styled-components';
import { Container } from '../common';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 9rem;
  background: #2f2b55;
  padding: 2rem 0;
`;
// background: #9b4f8a;

export const Profile = styled(Container)`
  display: flex;
  height: 10rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const MyAvatar = styled(Container)`
  border-radius: 50%;
  background-image: url('https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg');
  width: 5rem;
  height: 5rem;
  background-size: contain;
`;

export const MyName = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
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
`;

export const ContactRow = styled(Container)`
  justify-content: space-evenly;
  width: 100%;
`;
