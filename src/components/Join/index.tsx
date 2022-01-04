import finalImg from "../../assets/bloco_final_image.svg";
import { ButtonPrimary } from "../Button";
import { Container, Content } from "./styles";

export const Join = () => {
  return (
    <Container id="join">
      <Content>
        <div>
          <h2>
            Join our membership <br />
            to get special offer
          </h2>

          <ButtonPrimary>Know More</ButtonPrimary>
        </div>
        <img src={finalImg} alt="" />
      </Content>
    </Container>
  );
};
