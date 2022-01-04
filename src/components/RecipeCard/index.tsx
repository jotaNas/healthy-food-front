import { ButtonPrimary } from "../Button";
import { Content } from "./styles";

interface RecipeCardProps {
  img: string;
  title: string;
}

export const RecipeCard = ({ img, title }: RecipeCardProps) => {
  return (
    <Content>
      <img src={img} alt="" />
      <div className="info-recipe">
        <h3>{title}</h3>
        <ButtonPrimary>See Recipe</ButtonPrimary>
      </div>
    </Content>
  );
};
