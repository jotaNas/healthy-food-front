import { Button } from "./styles";

interface ButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <Button>{children}</Button>;
};
