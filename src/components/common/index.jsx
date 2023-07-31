import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.titleSecondary};
`;

export const LinkContainer = styled.a.attrs(() => ({
  target: '_blank',
}))``;
