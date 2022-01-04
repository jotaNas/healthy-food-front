import serviceImg from "../../assets/bloco_services.svg";
import { ButtonPrimary } from "../Button";
import { Text, Container, Content } from "./styles";

export const BestServices = () => {
  return (
    <Container>
      <Content>
        <img src={serviceImg} alt="" />
        <Text>
          <h2>
            The best services ready <br /> To serve you
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
            <br />
            <br />
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
            <br />
            <br />A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>
          <ButtonPrimary>Know More</ButtonPrimary>
        </Text>
      </Content>
    </Container>
  );
};
