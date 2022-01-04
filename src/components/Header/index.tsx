import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onRegisterModal: () => void;
}

export const Header = ({ onRegisterModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo do Helthy Food"></img>
        <div className="navbar">
          <ul>
            <li>
              <a href="#best-recipes">HELTHY RECIPES</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#join">JOIN</a>
            </li>
          </ul>
          <button type="button" onClick={onRegisterModal}>
            Register
          </button>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </Content>
    </Container>
  );
};
