import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  max-width: 1120px;

  font-size: 1rem;

  display: flex;
  align-items: center;

  img {
    position: relative;
    width: auto;
    height: auto;
    max-width: 44.89rem;
    max-height: 45.43rem;
    left: -125px;
  }

  @media (max-width: 680px) {
    img {
      display: none;
    }
  }
`;

export const Text = styled.div`
  width: 600px;
  position: relative;
  right: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    color: var(--titles);
    font-size: 2rem;

    margin-right: 5px;
  }

  p {
    font-family: "muli";
    color: var(--text);
  }
  button {
    width: 150px;
  }

  @media (max-width: 680px) {
    right: 0px;
    padding: 40px;
  }

  @media (max-width: 460px) {
    padding: 20px;
  }
`;
