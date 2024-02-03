import { ReactComponent as LogoIcon } from "icons/logo.svg";
import styled from "styled-components";
import DonationBox from "./components/DonationBox/";

const Header = styled.header`
  background-color: #fff;
  padding: 24px 40px;
`;

const Main = styled.main`
  background-color: var(--blue-grey-color);
  display: flex;
  justify-content: center;
  padding-top: 64px;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <LogoIcon height={32} />
      </Header>
      <Main>
        <DonationBox />
      </Main>
    </div>
  );
}

export default App;
