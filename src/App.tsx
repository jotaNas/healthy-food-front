import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { RegisterModal } from "./components/RegisterModal";

Modal.setAppElement("#root");

export function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(true);
  }

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false);
  }

  return (
    <>
      <Header onRegisterModal={handleOpenRegisterModal} />
      <MainPage />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onResquestClose={handleCloseRegisterModal}
      />
      <Footer />
      <GlobalStyle />
    </>
  );
}
