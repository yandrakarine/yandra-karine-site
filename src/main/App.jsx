import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import GlobalStyle from '../styles/globalStyles';
import { Content, Main } from './style';
import { RootRouter } from '../routes';
import '../fontawesome';
import { StateProvider } from '../context/theme';

function App() {
  return (
    <StateProvider>
      <BrowserRouter basename='/'>
        <GlobalStyle />
        <Main>
          <Sidebar />
          <Content>
            <RootRouter />
          </Content>
        </Main>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
