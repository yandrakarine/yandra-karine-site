import { Sidebar } from "../components/Sidebar";
import GlobalStyle from "../styles/globalStyles";
import { Content, Main } from "./style";
import "../fontawesome";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Sidebar>
          <Content></Content>
        </Sidebar>
      </Main>
    </>
  );
}

export default App;
