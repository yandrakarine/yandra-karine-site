import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import GlobalStyle from '../styles/globalStyles';
import { Content, Main } from './style';
import { RootRouter } from '../routes';
import '../fontawesome';

function App() {
  return (
    <BrowserRouter basename='/'>
      <GlobalStyle />
      <Main>
        <Sidebar />
        <Content>
          <RootRouter />
        </Content>
      </Main>
    </BrowserRouter>
  );
}

export default App;
