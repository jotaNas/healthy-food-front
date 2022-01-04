import styled from "styled-components";

export const Container = styled.footer``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  font-size: 1rem;
  font-family: "muli";
  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 25px;
    color: var(--text);
  }
`;
