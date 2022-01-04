import styled from "styled-components";

export const Content = styled.article`
  width: 528px;
  height: 225px;
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 40px -15px lightgrey;
  border-radius: 0.3rem;
  h3 {
    width: 150px;
    text-align: left;
  }
  .info-recipe {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 225px;
    height: 350px;
    flex-direction: column;
    justify-content: space-between;

    .info-recipe {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    height: 300px;

    .info-recipe {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
