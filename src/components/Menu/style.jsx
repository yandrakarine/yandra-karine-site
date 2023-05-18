import styled from 'styled-components';
import { device } from '../../styles/devices';

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (${device.mobileL}) {
    flex-direction: row;
    width: 70%;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 1rem;

  @media (${device.mobileL}) {
    padding: 0rem 1.5rem;
  }
`;
