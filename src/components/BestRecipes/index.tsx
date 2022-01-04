import { RecipeCard } from "../RecipeCard";
import { Container, Content, Title } from "./styles";
import imgFood01 from "../../assets/comida_1.svg";
import imgFood02 from "../../assets/comida_2.svg";
import imgFood03 from "../../assets/comida_3.svg";
import imgFood04 from "../../assets/comida_4.svg";

export function BestRecipes() {
  return (
    <Container id="best-recipes">
      <Title>
        <h2>Our Best Recipes</h2>
        <p>
          Far far away, behind the word mountains, far from the countries <br />{" "}
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </Title>

      <Content>
        <RecipeCard
          img={imgFood01}
          title="Broccoli Salad
with Bacon"
        />
        <RecipeCard
          img={imgFood02}
          title="Classic Beef
Burgers"
        />
        <RecipeCard
          img={imgFood03}
          title="Classic Potato
Salad"
        />
        <RecipeCard
          img={imgFood04}
          title="Cherry Cobbler
on the Grill"
        />
      </Content>
    </Container>
  );
}
