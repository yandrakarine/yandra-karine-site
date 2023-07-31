import styled from 'styled-components';
import { Container } from '../../components/common';
import { pageTransitions } from '../../styles/animations';
import { CountryFlag } from '../../components/Sidebar/style';

export const Wrapper = styled(Container)`
  flex-direction: column;
  align-content: center;
  background: 'white';
  width: 100%;
  height: 100vh;
  animation: ${pageTransitions} 500ms linear;
`;

export const SettingsTitle = styled.h2`
  justify-self: flex-start;
  text-align: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.titlePrimary};
`;

export const ToolsTitle = styled.h3`
  text-align: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.textPrimary};
`;

export const SettingContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

export const CountryFlagSettings = styled(CountryFlag)`
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
`;

export const IconRow = styled(Container)`
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
`;
