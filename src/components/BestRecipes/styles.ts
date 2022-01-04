import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 210px;

  @media (max-width: 1080px) {
    margin-top: 250px;
  }
  @media (max-width: 780px) {
    margin-top: 150px;
  }
  @media (max-width: 660px) {
    margin-top: 50px;
  }
  @media (max-width: 420px) {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1090px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;

  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.div`
  text-align: center;

  display: block;
  h2 {
    font-size: 2rem;
    color: var(--titles);
  }
  p {
    color: var(--text);
    font-family: "muli";
    font-size: 1rem;
  }
`;
