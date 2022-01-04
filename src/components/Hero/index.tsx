import { Container, Content } from "./styles";
import hero from "../../assets/Illustration.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../Input";

export function Hero() {
  return (
    <Container>
      <img src={hero} alt="" />
      <Content>
        <h1>
          Ready for <br />
          Trying a new recipe?
        </h1>
        <div className="search-recipes">
          <input name="hero" type="text" placeholder="Search healthy recipe" />
          <button>
            <AiOutlineSearch size={24} color="#fff" />
          </button>
        </div>
      </Content>
    </Container>
  );
}
