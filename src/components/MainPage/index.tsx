import { BestRecipes } from "../BestRecipes";
import { BestServices } from "../BestServices";
import { Blog } from "../Blog";
import { Hero } from "../Hero";
import { Join } from "../Join";
import { Container } from "./styles";

export function MainPage() {
  return (
    <>
      <Container>
        <Hero />
        <BestRecipes />
        <BestServices />
        <Blog />
        <Join />
      </Container>
    </>
  );
}
