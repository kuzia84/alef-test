import React from "react";
import { Footer } from "./components/elements/footer/footer";
import { PageContent } from "./components/elements/pageContent/pageContent";
import { Header } from "./components/elements/header/header";
import { UserForm } from "./components/elements/userForm/userForm";
import { UserInformation } from "./components/elements/userInformation/userInformation";
import "./App.css";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { userFormVisible, userInfoVisible } = useAppSelector(
    (state) => state.appReducer
  );
  return (
    <>
      <Header />
      <PageContent>
        <UserForm visible={userFormVisible} />
        <UserInformation visible={userInfoVisible} />
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
