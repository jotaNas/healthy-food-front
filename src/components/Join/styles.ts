import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  font-size: 1rem;
  padding: 0 1rem 2rem;
  display: flex;
  align-items: center;

  h2 {
    font-size: 2rem;
    color: var(--titles);
    margin-bottom: 20px;
    margin=left: 20px;
  }

  img {
    position: relative;
    width: auto;
    height: auto;
    max-width: 44.89rem;
    max-height: 45.43rem;
    right: -150px;
    bottom: -72px;
  }

  @media (max-width: 440px) {
    img {
      display: none;
    }
  }
`;
