import styled from "styled-components";

export const Content = styled.article`
  width: 348px;
  height: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 4px 40px -15px lightgrey;
  border-radius: 0.5rem;
  h3 {
    color: var(--titles);
    width: 250px;
    text-align: left;
    margin-bottom: 20px;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
    span {
      color: var(--text);
      font-size: 1rem;
      font-family: "muli";
    }
  }

  @media (max-width: 480px) {
    width: 348px;
    height: 450px;
    h3 {
      color: var(--titles);
      width: 150px;
      text-align: center;
      margin-bottom: 20px;
    }
    .user {
      display: block;
      justify-content: center;
      align-items: center;
    }
    img {
      margin-left: 50px;
    }
  }
  @media (max-width: 350px) {
    h3 {
      width: 100px;
      font-size: 1rem;
    }
    img {
      margin-left: 25px;
    }
  }
  @media (max-width: 280px) {
    h3 {
      width: 50px;
    }
    img {
      margin-left: 0px;
    }
  }
`;
