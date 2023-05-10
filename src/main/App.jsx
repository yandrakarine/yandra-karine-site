import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import GlobalStyle from '../styles/globalStyles';
import { Content, Main } from './style';
import { RootRouter } from '../routes';
import '../fontawesome';

/* Configurar o ESLint + Prettier no projeto pra testar */
/* algo não está sendo usado?? -  retirar */
/* Criar os componentes da Home */
/* Criar os componentes da Experiences */
/* Criar os componentes da code-skills */
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
