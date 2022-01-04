import styled from "styled-components";

export const Button = styled.button`
  font-size: 1rem;
  font-family: "muli";
  color: var(--white);
  background: var(--green);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
