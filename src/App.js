import "./App.css";
import Sidebar from "./Components/App/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HeaderTitle from "./Components/UI/HeaderTitle/HeaderTitle";
import { Icon } from "./Components/UI/Icon/Icon";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context/Context";
import PageLoader from "./Components/UI/Loader/PageLoader";
import Main from "./Pages/Main";

function App() {
  const { isDesktop, uiState, data } = useContext(AppContext);
  const user = data.user;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("====================================");
    console.log("user", user);
    console.log("====================================");
    if (uiState.isLoading || !user._id) {
      setIsLoading(true);
    }
    return () => {
      setIsLoading(false);
    };
  }, [uiState.isLoading, user]);

  return (
    <Container fluid className="App p-0 m-0">
      <header className="max-h100vh  App-header">
        <Sidebar />
      </header>
      <main className="mainContainer">
        <HeaderTitle className="headerTitle" isHeader={isDesktop} sticky={true}>
          {user._id && isDesktop && (
            <div>
              <div className={"smallfontSize"}>
                <Icon iconName={"Telephone"} /> {user.mob}
              </div>
              <div className={"smallfontSize"}>
                <Icon iconName={"Envelope"} /> {user.email}
              </div>
            </div>
          )}

          <div> {user.name}</div>
        </HeaderTitle>
        {isLoading ? <PageLoader /> : <Main />}
      </main>
    </Container>
  );
}

export default App;
